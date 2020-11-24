//winston
const winston=require('winston')
require('winston-mongodb')
const logger =winston.createLogger({
    level:'error',
    format:winston.format.json(),
    defaultMeta:{service:'user-service'},
    transports:[
            new winston.transports.File({filename:'error.log',level:'error',
                format:winston.format.combine(winston.format.timestamp(),winston.format.json())}),

            new winston.transports.MongoDB({level:'error',db:'mongodb://localhost/db_3',options:{useUnifiedTopology:true}
           }),




    ]

    });

module.exports=logger;
