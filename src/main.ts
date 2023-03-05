import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import compression from 'compression';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  await app.listen(3000);
}
bootstrap();
