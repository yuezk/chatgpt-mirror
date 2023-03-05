# ChatGPT Mirror

Based on model `gpt-3.5-turbo`. Demo: https://fastgpt.app

## Installation

```bash
$ pnpm install
```

## Running the app

Create a `.env` file in the root directory and add your OpenAI API key:

```properties
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

Visit http://localhost:3000

## License

[MIT licensed](LICENSE).
