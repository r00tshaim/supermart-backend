import generateToken from "../../config/generateToken.js";
import logger from "../../logger/logger.js";
import User from "../../models/UserModels.js";
import ErrorHandler from "../../utils/errorHandler.js";

// @desc    User Registration
// @route   POST /api/v1/auth/register
// @access  Public
const register = async (req, res, next) => {
  const { username, email, phone, address, role } = req.body;

  if (!username || !email || !phone) {
    return next(new ErrorHandler("Please provide all filds", 401));
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return next(new ErrorHandler("User exists, please use other email", 400));
    }

    const user = await User.create({
      username,
      email,
      phone,
      address,
      role,
    });

    if (user) {
      res.status(200).json({
        success: true,
        user,
        Token: generateToken(user._id),
      });
    }
  } catch (error) {
    return next(new ErrorHandler(`Error register(): ${error.message}`, 500));
  }
};

const findUserByMobile = (mobile) => {
  return new Promise((resolve, reject) => {
    User.findOne({ mobile: mobile }, (err, user) => {
      if (err) {
        reject(err);
      } else if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};

export { register, findUserByMobile };
