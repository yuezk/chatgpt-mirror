import { Injectable, MessageEvent, OnModuleInit } from '@nestjs/common';
import { ChatGPTAPI, ChatMessage, ConversationResponseEvent } from 'chatgpt';
import fetch from 'isomorphic-unfetch';
import ProxyAgent from 'proxy-agent';
import { Observable } from 'rxjs';

@Injectable()
export class ChatGPTService implements OnModuleInit {
  private api: ChatGPTAPI;
  private httpProxy: string;

  onModuleInit() {
    this.httpProxy = process.env.HTTP_PROXY;

    this.api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
      fetch: this.proxyFetch,
    });
  }

  private proxyFetch = (url: string, options?: any) => {
    return fetch(url, {
      ...options,
      agent: this.httpProxy ? new ProxyAgent(this.httpProxy) : undefined,
    });
  };

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
