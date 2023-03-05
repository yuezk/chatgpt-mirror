# ChatGPT Mirror

Based on model `gpt-3.5-turbo`. Demo: https://fastgpt.app

## Installation

> Tested on Node.js 18.x.

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

## Credits

Thanks: [transitive-bullshit/chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

## License

[MIT licensed](LICENSE).
