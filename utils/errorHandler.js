class ErrorHandler {
  constructor(code, message, success=false) {
    this.code = code;
    this.message = message;
    this.success = success || false;
  }

  static badRequest(msg) {
    return new ErrorHandler(400, msg);
  }

  static internal(msg) {
    return new ErrorHandler(500, msg);
  }
}

export default ErrorHandler;
