import { Controller, Get, Inject, Req, Res, UseGuards } from '@nestjs/common';
import { Logger } from 'winston';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(@Inject('LOGGER') private logger: Logger) {}

  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleCallback(@Req() req: Request, @Res() res: Response) {
    this.logger.silly('googleCallback');
    this.logger.silly('test with session: ', req.session);
    // TODO: add redirect
    return {};
    // if (jwt) res.redirect('http://localhost:4200/login/succes/' + jwt);
    // else res.redirect('http://localhost:4200/login/failure');
  }
}
