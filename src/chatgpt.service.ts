import { Injectable, Logger, MessageEvent, OnModuleInit } from '@nestjs/common';
import { ChatGPTAPI, ChatMessage, ConversationResponseEvent } from 'chatgpt';
import fetch from 'isomorphic-unfetch';
import ProxyAgent from 'proxy-agent-v2';
import { Observable } from 'rxjs';

@Injectable()
export class ChatGPTService implements OnModuleInit {
  private readonly logger = new Logger(ChatGPTService.name);

  private api: ChatGPTAPI;
  private proxyAgent: unknown;

  onModuleInit() {
    const { HTTP_PROXY } = process.env;
    if (HTTP_PROXY) {
      this.proxyAgent = new ProxyAgent(HTTP_PROXY);
    }

    this.api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
      fetch: this.proxyFetch,
    });
  }

  private proxyFetch = (url: string, options?: any) => {
    return fetch(url, {
      ...options,
      agent: this.proxyAgent,
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
        .catch((err) => {
          this.logger.error(err);

          subscriber.next({
            type: 'add',
            data: {
              error: {
                message: err.message || 'Unknown error',
              },
            },
          });
        })
        .finally(() => {
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
        author: {
          role: 'assistant',
        },
      },
      error: null,
    } as ConversationResponseEvent;
  }
}
