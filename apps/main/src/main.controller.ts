import { Controller, Get, Param } from '@nestjs/common';

@Controller('hello')
export class MainController {
  @Get('nest')
  public nest(): string {
    return 'Hello Nest!';
  }

  @Get('nest/:id/params')
  public nestParams(@Param('id') id: string): string {
    return `Hello Nest! Your id is ${id}`;
  }
}
