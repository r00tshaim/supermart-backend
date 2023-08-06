import logger from "../../logger/logger.js";
import ErrorHandler from "../../utils/errorHandler.js";
import twilio from "twilio";
import User from "../../models/UserModels.js";
import generateToken from "../../config/generateToken.js";

var twilioClient;

//helper---------------------
export const initTwilio = () => {
  try {
    twilioClient = twilio(
      process.env.TWILIO_ACC_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
  } catch (err) {
    logger.error("error while initilizing twilio client=", err);
  }
};

const sendOTPHelper = async (to) => {
  try {
    logger.info("sendOTPHelper");
    const message = await twilioClient.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({ to, channel: "sms" });
    return message;
  } catch (err) {
    console.log("sendOTPHelper error=", err);
    logger.error(`sendOTPHelper error=${err}`);
  }
};

const checkOTPHelper = async (to, code) => {
  try {
    logger.info(`checkOTPHelper for to=${to} and code=${code}`);
    const message = await twilioClient.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({ to, code });
    return message;
  } catch (err) {
    console.log("checkOTPHelper error=", err);
    logger.error(`checkOTPHelper error=${err}`);
  }
};
//--------------------------------------------

// @desc    Request for otp
// @route   GET /api/v1/auth/sendotp/:to
// @access  Public
const sendotp = async (req, res) => {
  logger.info("sendotp");
  const to = req.params.to;
  logger.info("otp request for mobile number=", to);
  try {
    if (to !== "" || to !== undefined) {
      const message = sendOTPHelper(to);
      if (message) {
        logger.info(`otp sent to=${to}`);
        res.status(200).json({ success: true, message });
      } else {
        logger.error(`Error while sending otp ${to}`);
        return next(new ErrorHandler(`Error while sending otp to ${to}`, 400));
      }
    } else {
      logger.error("Error in mobile number");
      return next(new ErrorHandler("Error in mobile number", 400));
    }
  } catch (err) {
    logger.error(`Error in sendotp err=${err}`);
    return next(new ErrorHandler(`Error in sendotp err=${err}`, 500));
  }
};

//@route    GET api/v1/auth/verifyotp/:to/:code
const verifyotp = async (req, res) => {
  logger.info("verifyotp");
  const to = req.params.to;
  const otpCode = req.params.code;
  logger.info(`verify otp request for mobile number=${to} and otp=${otpCode}`);

  try {
    if (
      to !== "" ||
      to !== undefined ||
      otpCode !== "" ||
      otpCode !== undefined
    ) {
      const message = checkOTPHelper(to, otpCode);
      if (message) {
        logger.info(`otp verified for=${to}`);

        //find user by mobile
        const userExists = await User.findOne({ mobile: to });
        if (userExists) {
          logger.info(`not a new user mobile=${to}`);
          
         const {token, createdAt, expiresAt} = generateToken(userExists._id);
         //console.log(`generated token=${token}`)
          //existing user, return token
          res.status(200).json({
            success: true,
            newUser: false,
            userInfo: userExists,
            token,
            createdAt,
            expiresAt
          });
        } else {
          //new user
          logger.info(`new user with mobile=${to}`);
          res.status(201).json({ success: true, newUser: true });
        }

        
      } else {
        logger.error(`Error while sending otp ${to}`);
        return next(new ErrorHandler(`Error while sending otp to ${to}`, 400));
      }
    } else {
      logger.error(`Error in mobile number=${to} or otp=${otpCode}`);
      return next(
        new ErrorHandler(`Error in mobile number=${to} or otp=${otpCode}`, 400)
      );
    }
  } catch (err) {
    logger.error(`Error in verifyotp err=${err}`);
    return next(new ErrorHandler(`Error in verifyotp err=${err}`, 500));
  }
};

const register = async (req, res, next) => {
  logger.info("auth register controller function");
  const { name, email, mobile, address } = req.body;
  try {
    if (!name || !email || !mobile || !address) {
      logger.error(`Please provide all filds`);
      return next(new ErrorHandler("Please provide all filds", 403));
    }

    const userExists = await User.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });

    if (userExists) {
      logger.error(
        `User with email=${email} or mobile=${mobile} already exists`
      );
      return next(new ErrorHandler("User exists, please use other email", 409));
    }

    const newUser = await User.create({
      username: name,
      email,
      mobile,
      address,
    });

    logger.info(`newuser registered with mobile=${mobile} done`);
    const {token, createdAt, expiresAt} = generateToken(newUser._id);
    //console.log(`generated token=${token}`)
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      userInfo: newUser,
      token,
      createdAt,
      expiresAt
    });
  } catch (error) {
    logger.error(`Error in register err=${error}`);
    return next(new ErrorHandler(`Error in register err=${error}`, 500));
  }
};

export { sendotp, verifyotp, register };
