export type OpenAiConfig = {
  systemMessage?: string;
  maxTokens?: number;
  model?: string;
}
export type AppConfig = {
  openai?: OpenAiConfig;
};
