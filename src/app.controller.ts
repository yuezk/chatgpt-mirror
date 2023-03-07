import { Body, Controller, Get, MessageEvent, Post, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AppService } from './app.service.js';
import { ConversationRequestBody, GenTitleRequestBody } from './app.types';

@Controller({ path: '/backend-api' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('moderations')
  moderations() {
    return {
      blocked: false,
      flagged: false,
      moderation_id: uuidv4(),
    };
  }

  @Get('conversations')
  conversations() {
    return {
      items: [],
      total: 0,
      limit: 20,
      offset: 0,
    };
  }

  @Post('conversation')
  @Sse()
  conversation(@Body() body: ConversationRequestBody): Observable<MessageEvent> {
    const { messages, parent_message_id } = body;
    const message = messages[0]?.content.parts[0] ?? '';

    return this.appService.sendMessage(message, parent_message_id);
  }

  @Post('conversation/gen_title/')
  generateTitle(@Body() body: GenTitleRequestBody) {
    return {
      title: '',
    };
  }
}
