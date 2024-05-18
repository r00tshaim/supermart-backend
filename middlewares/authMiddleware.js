import jwt from "jsonwebtoken";
import User from "../models/UserModels.js";
import ErrorHandler from "../utils/errorHandler.js";

const protect = async (req, res, next) => {
  let token;
  logger.info(`req.headers.authorization=${req.headers.authorization}`);

  try{

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        return next(new ErrorHandler("Not authorized, token failed", 401));
      }
    }

    if (!token) {
      return next(new ErrorHandler("Not authorized, no token", 401));
    }
  }catch(err) {
    console.log(`Erro in auth middleware err=${err}`)
  }
};

export { protect };
