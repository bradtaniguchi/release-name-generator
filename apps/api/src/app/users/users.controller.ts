import { Controller, Get } from '@nestjs/common';
import { ROUTES } from '@release-name-generator/common';

@Controller(ROUTES.users.root())
export class UsersController {
  @Get()
  test(): string {
    return 'users controller';
  }

  // TODO: add others
}
