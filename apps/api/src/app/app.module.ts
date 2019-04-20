import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { winstonLoggerFactory } from './winston/winston-logger-factory';

@Module({
  imports: [UsersController],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'LOGGER',
      useFactory: winstonLoggerFactory
    }
  ]
})
export class AppModule {}
