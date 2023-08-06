import jwt from "jsonwebtoken";
import User from "../models/UserModels.js";
import ErrorHandler from "../utils/errorHandler.js";
import logger from "../logger/logger.js";

const protect = async (req, res, next) => {
  let token;
  logger.info(`req.headers.authorization=${req.headers.authorization}`);

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      logger.info(`req.user= ${req.user.email}`);
      next();
    }catch(error) {
      logger.error(`auth middleware error error=${error}`)
      if (error instanceof jwt.TokenExpiredError) {
        return next(new ErrorHandler(`Unauthorized! Auth Token was expired!`, 401));
        //return res.status(401).send({ success: false, message: 'Unauthorized! Access Token was expired!' });
      }
      else if (error instanceof jwt.NotBeforeError) {
        return next(new ErrorHandler(`jwt not active`, 403));
        //return res.status(401).send({ success: false, message: 'jwt not active' });
      }
      else if (error instanceof jwt.JsonWebTokenError) {
        return next(new ErrorHandler(`jwt malformed`, 400));
        //return res.status(401).send({ success: false, message: 'jwt malformed' });
      }
      else {
        return next(new ErrorHandler(`Error while checking Authorization token`, 500));
      }
    }

  } else {
    return next(new ErrorHandler(`Not authorization token provided error=${error}`, 405));
  }
};

export { protect };
