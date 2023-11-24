import { Module } from '@nestjs/common';
import { MainController } from './main.controller';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [],
})
export class MainModule {}
