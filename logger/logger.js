import winston, {format} from 'winston';

const options = {
    file: {
      //level: 'info',
      filename: `app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true,
      timestamp: true,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: true,
      colorize: true,
      timestamp: true,
    }
};


// Create a new Winston logger instance
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms A' }), // Add timestamp to logs
    winston.format.printf((info) => {
        // Define the log format
        return `${info.timestamp} [${info.level.toUpperCase()}] - ${info.message}`;
    })
  ),
  transports: [
    //new winston.transports.Console(options.console), // Output logs to the console
    new winston.transports.File(options.file), // Output logs to a file
  ],
});


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