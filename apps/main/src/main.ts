import { hapiServer } from '@legacy/my-legacy/hapi';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options);
  const paths = Object.keys(document.paths);

  app.use(async (req, res, next) => {
    if (paths.includes(req.url)) {
      return next();
    }

    const { result, statusCode, headers } = await hapiServer.inject({
      method: req.method,
      url: req.url,
      headers: req.headers,
      payload: req.body,
    });
    res.status(statusCode).set(headers).send(result);
  });

  await app.listen(3000);
}

bootstrap();
