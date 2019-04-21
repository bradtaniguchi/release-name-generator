import { Controller, Get, Inject } from '@nestjs/common';
import { ROUTES } from '@release-name-generator/common';
import { Logger } from 'winston';

@Controller()
export class AppController {
  constructor(@Inject('LOGGER') private logger: Logger) {}

  // @Get()
  // getData() {
  //   return this.appService.getData();
  // }
  @Get(ROUTES.info())
  info() {
    this.logger.silly('test!!');
    return {
      message: 'info called',
      status: 200
    };
  }
}
