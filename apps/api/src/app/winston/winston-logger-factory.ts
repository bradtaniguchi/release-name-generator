import { createLogger, Logger, transports } from 'winston';
import { environment } from '../../environments/environment.dev';
import { LoggingWinston } from '@google-cloud/logging-winston';

/**
 * Factory function for the winston logger
 */
export const winstonLoggerFactory = (): Logger => {
  switch (environment.runtime_env) {
    case 'dev':
      return createLogger({
        level: 'silly',
        transports: [new LoggingWinston()]
      });
    case 'prod':
      return createLogger({
        level: 'info',
        transports: [new LoggingWinston()]
      });
    default:
    case 'local':
      return createLogger({
        level: 'silly',
        transports: [new transports.Console({ level: 'silly' })]
      });
  }
};
