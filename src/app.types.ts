import { Message } from 'chatgpt';

export type ConversationRequestBody = {
  action: 'next';
  messages: Message[];
  model: string;
  parent_message_id: string;
};

export type GenTitleRequestBody = {
  message_id: string;
}
