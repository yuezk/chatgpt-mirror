import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ChatGPTService } from './chatgpt.service.js';
import configuration from './config/configuration.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGPTService],
})
export class AppModule {}
