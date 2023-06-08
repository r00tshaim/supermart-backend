import winston from 'winston';

const options = {
    file: {
      //level: 'info',
      filename: `app.log`,
      handleExceptions: true,
      //json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true,
      timestamp: true,
    },
    console: {
      //level: 'debug',
      handleExceptions: true,
      //json: true,
      colorize: true,
      timestamp: true,
    }
};

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in debug mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || 'debug'
  const isDevelopment = env === 'debug'
  return isDevelopment ? 'debug' : 'warn'
}

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors)

const logFormat = winston.format.combine(
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // Tell Winston that the logs must be colored
  winston.format.colorize({ all: true }),
  // Define the format of the message showing the timestamp, the level and the message
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
)

// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const transports = [
  // Allow the use the console to print the messages
  //new winston.transports.Console(options.console),

  // Allow to print all the error level messages inside the error.log file
  /*new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),*/
  // Allow to print all the error message inside the app.log file
  // (also the error log that are also printed inside the error.log(
  new winston.transports.File(options.file),
]

const logger = winston.createLogger({
  level: level(),
  levels,
  logFormat,
  transports,
})

export default logger;


/*

HOW TO USE:
import logger from '../../logger/logger.js';

logger.info('This is an information log');
logger.warn('This is a warning log');
logger.error('This is an error log');

LIMITATIONS:
currently not able to parse JSON object passed in message

*/