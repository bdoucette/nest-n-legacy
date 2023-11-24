import { legacyRouter } from '@legacy/my-legacy/main';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  app.use('/', legacyRouter);

  await app.listen(3000);
}
bootstrap();
