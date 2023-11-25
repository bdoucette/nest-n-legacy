import { NestFactory } from '@nestjs/core';
import { LegacyService } from './legacy/legacy.service';
import { MainModule } from './main.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  await app.listen(3000);

  const server = app.getHttpAdapter().getInstance();
  const legacyService = app.get(LegacyService);

  legacyService.registerNestJsRoutes(server._router);
}

bootstrap();
