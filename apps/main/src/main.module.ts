import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { LegacyMiddleware } from './legacy/legacy.middleware';
import { LegacyService } from './legacy/legacy.service';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [LegacyService],
})
export class MainModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LegacyMiddleware).forRoutes('*');
  }
}
