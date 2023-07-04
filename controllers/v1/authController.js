import logger from '../../logger/logger.js';
import ErrorHandler from "../../utils/errorHandler.js";
import twilio from "twilio"
import { findUserByMobile } from './userController.js';
import generateToken from "../../config/generateToken.js";


var twilioClient;

//helper---------------------
export const initTwilio = () => {
    try{
        twilioClient = twilio(process.env.TWILIO_ACC_SID, process.env.TWILIO_AUTH_TOKEN)
    }catch(err) {
        logger.error("error while initilizing twilio client=",err);
    }
}

const sendOTPHelper = async (to) => {
    try{
        logger.info("sendOTPHelper")
        const message = await twilioClient.verify.v2.services(process.env.TWILIO_VERIFY_SID).verifications.create({ to, channel: "sms" })
        return message;
    }catch(err) {
        console.log("sendOTPHelper error=",err)
        logger.error(`sendOTPHelper error=${err}`)
    }
}

const checkOTPHelper = async (to, code) => {
    try{
        logger.info(`checkOTPHelper for to=${to} and code=${code}`)
        const message = await twilioClient.verify.v2.services(process.env.TWILIO_VERIFY_SID).verificationChecks.create({to, code})
        return message;
    }catch(err) {
        console.log("checkOTPHelper error=",err)
        logger.error(`checkOTPHelper error=${err}`)
    }
}
//--------------------------------------------

// @desc    Request for otp
// @route   GET /api/v1/auth/sendotp/:to
// @access  Public
const sendotp = async (req, res) => {
    logger.info('sendotp');
    const to = req.params.to
    logger.info('otp request for mobile number=', to);
    try{
        if(to !== "" || to !== undefined) {
            const message =  sendOTPHelper(to);
            if(message) {
                logger.info(`otp sent to=${to}`)
                res.status(200).json({success: true, message})
            } else {
                logger.error(`Error while sending otp ${to}`)
                return next(new ErrorHandler(`Error while sending otp to ${to}`, 400));
            }
        } else {
            logger.error("Error in mobile number")
            return next(new ErrorHandler("Error in mobile number", 400));
        }
        
    } catch(err) {
      logger.error(`Error in sendotp err=${err}`);
      return next(new ErrorHandler(`Error in sendotp err=${err}`, 500));
      //res.status(500)
    }
};

const verifyotp = async (req, res) => {
    logger.info('verifyotp');
    const to = req.params.to;
    const otpCode = req.params.code;
    logger.info(`verify otp request for mobile number=${to} and otp=${otpCode}`);

    try {
        if(to !== "" || to !== undefined || otpCode !== "" || otpCode !== undefined) {
            const message = checkOTPHelper(to, otpCode);
            if(message) {
                logger.info(`otp verified for=${to}`)
                
                const user = await findUserByMobile(to);
                if (user) {
                    //existing user, return token
                    res.status(200).json({ 
                        success: true, 
                        userExists: true, 
                        user: user,
                        token: generateToken(user._id),
                    });
                }

                //new user
                res.status(200).json({success: true, userExists: false })
            } else {
                logger.error(`Error while sending otp ${to}`)
                return next(new ErrorHandler(`Error while sending otp to ${to}`, 400));
            }
        } else {
            logger.error(`Error in mobile number=${to} or otp=${otpCode}`)
            return next(new ErrorHandler(`Error in mobile number=${to} or otp=${otpCode}`, 400));
        }

    }catch(err) {
        logger.error(`Error in verifyotp err=${err}`);
        return next(new ErrorHandler(`Error in verifyotp err=${err}`, 500));
        //res.status(500)
    }
}


  export {
    sendotp,
    verifyotp,
  };