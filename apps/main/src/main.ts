import { NestFactory } from '@nestjs/core';
import { LegacyService } from './legacy/legacy.service';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  await app.listen(3000);

  const server = app.getHttpServer();
  const router = server._events.request._router;
  const legacyService = app.get(LegacyService);

  legacyService.registerNestJsRoutes(router);
}

bootstrap();
