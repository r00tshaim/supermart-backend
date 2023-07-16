import ErrorHandler from "../utils/errorHandler.js";
import logger from "../logger/logger.js";

function ErrorHandlerMiddleware(err, req, res, next) {
  // in prod, don't use console.log or console.err because
  // it is not async
  //logger.error("err=",err)
  //console.error("err=",err);

  if (err instanceof ErrorHandler) {
    logger.info("err is instance of ErrorHandler")
    res.status(err.code).json(err);
    return;
  }

  res.status(500).json('something went wrong');
}

export default ErrorHandlerMiddleware;