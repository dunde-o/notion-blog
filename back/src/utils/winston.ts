import * as path from 'path';
import { utilities, WinstonModule } from 'nest-winston';
import * as WinstonDaily from 'winston-daily-rotate-file';
import * as winston from 'winston';

const isDev = process.env.NODE_ENV === 'dev';
const logDir = path.resolve(__dirname, '../../logs');

const dailyOptions = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD',
    dirname: logDir + `/${level}`,
    filename: `%DATE%.${level}.log`,
    maxFiles: 30,
    zippedArchive: true,
  };
};

const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: isDev ? 'silly' : 'http',
      format: isDev
        ? winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike('notion-blog', { prettyPrint: true }),
          )
        : winston.format.simple(),
    }),
    new WinstonDaily(dailyOptions('info')),
    new WinstonDaily(dailyOptions('warn')),
    new WinstonDaily(dailyOptions('error')),
  ],
});

export { winstonLogger };
