import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Logger } from 'winston';
import { API_PREFIX } from '../config/api-prefix';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(@Inject('LOGGER') private logger: Logger) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${API_PREFIX}/api/auth/google/callback`,
      passReqToCallback: true,
      scope: ['profile', 'openid', 'email']
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function
  ) {
    try {
      this.logger.log(profile);

      const jwt: string = 'placeholderJWT';
      const user = {
        jwt
      };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
