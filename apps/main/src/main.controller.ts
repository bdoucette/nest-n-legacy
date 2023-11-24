import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class MainController {
  @Get('nest')
  public nest(): string {
    return 'Hello Nest!';
  }
}
