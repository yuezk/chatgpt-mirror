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
# optional, support http or socks proxy
HTTP_PROXY=http://proxy-server:port
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

## Running the app with Docker


## Configuration

You can configure the app by copying the `config/example.json` to `config/app.config.json`
and editing its values. Note: comments are not allowed in JSON files.

## Credits

Thanks: [transitive-bullshit/chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

## License

[MIT licensed](LICENSE).
