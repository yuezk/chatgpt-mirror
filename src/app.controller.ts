import { Body, Controller, MessageEvent, Post, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AppService } from './app.service.js';
import { ConversationRequestBody } from './app.types';

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

  @Post('conversation')
  @Sse()
  conversation(@Body() body: ConversationRequestBody): Observable<MessageEvent> {
    const { messages, parent_message_id } = body;
    const message = messages[0]?.content.parts[0] ?? '';

    return this.appService.sendMessage(message, parent_message_id);
  }
}
