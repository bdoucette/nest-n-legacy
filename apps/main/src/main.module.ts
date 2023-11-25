import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LegacyMiddleware } from './legacy/legacy.middleware';
import { LegacyService } from './legacy/legacy.service';
import { MainController } from './main.controller';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [LegacyService],
})
export class MainModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LegacyMiddleware).forRoutes('*');
  }
}
