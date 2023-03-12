export type ErrorMapping = {
  keyword: string;
  message: string;
};

export type OpenAiConfig = {
  systemMessage?: string;
  maxTokens?: number;
  model?: string;
  errorMapping?: ErrorMapping[];
};

export type AppConfig = {
  openai?: OpenAiConfig;
};
