import { Injectable, OnModuleInit, MessageEvent } from '@nestjs/common';
import { ChatGPTAPI, ChatMessage, ConversationResponseEvent } from 'chatgpt';
import fetch from 'isomorphic-unfetch';
import { Observable } from 'rxjs';

@Injectable()
export class ChatGPTService implements OnModuleInit {
  private api: ChatGPTAPI;

  onModuleInit() {
    this.api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
      fetch,
    });
  }

  sendMessage(message: string, parentMessageId: string): Observable<MessageEvent> {
    const observable = new Observable<MessageEvent>((subscriber) => {
      this.api
        .sendMessage(message, {
          parentMessageId,
          onProgress: (partialResponse) => {
            subscriber.next({
              type: 'add',
              data: this.buildMessageEvent(partialResponse),
            });
          },
        })
        .then(() => {
          subscriber.next({
            data: '[DONE]',
          });
        });
    });

    return observable;
  }

  private buildMessageEvent(chatMessage: ChatMessage): ConversationResponseEvent {
    const { id, role, text } = chatMessage;
    return {
      message: {
        id,
        role,
        user: null,
        create_time: null,
        update_time: null,
        end_turn: null,
        weight: 0,
        recipient: 'all',
        metadata: null,
        content: {
          content_type: 'text',
          parts: [text],
        },
      },
      error: null,
    };
  }
}
