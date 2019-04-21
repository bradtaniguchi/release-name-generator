import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { winstonLoggerFactory } from './winston/winston-logger-factory';
import { AuthService } from './core/services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './auth/google.strategy';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer', session: true })
  ],
  controllers: [UsersController, AppController, AuthController],
  providers: [
    AppService,
    AuthService,
    GoogleStrategy,
    {
      provide: 'LOGGER',
      useFactory: winstonLoggerFactory
    }
  ]
})
export class AppModule {}
