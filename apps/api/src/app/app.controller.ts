import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ROUTES } from '@release-name-generator/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get(ROUTES.info())
  info() {
    return {
      message: 'info called',
      status: 200
    };
  }
}
