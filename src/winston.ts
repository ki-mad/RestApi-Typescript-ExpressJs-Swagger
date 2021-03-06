const appRoot = require('app-root-path')
const winston = require('winston')

const date = new Date();

//winston configuration
const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // max file size 5mb
        colorize: false,
        timestamp: date.getTime
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: 'false',
        colorize: 'true',
    },
};

// call winston class 
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(+new Date()),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console()
    ],
    exitOnError: false, // make apps not stop if any exception
})

logger.stream = {
    write: function(message: any, encoding: any) {
        logger.info(message)
    },
};

// export const stream = {
//     write: logger.info
// };

// export default logger

module.exports = logger;