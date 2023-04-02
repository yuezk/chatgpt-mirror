<!-- Archive notice -->
> :warning: This repository is archived. Please use [ChatbotUI](https://github.com/mckaywrigley/chatbot-ui) instead.

# ChatGPT Mirror

Based on model `gpt-3.5-turbo`.

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

### Build the image

```bash
$ docker build -t chatgpt-mirror .
```

### Run the container

```bash
$ docker run -d -p 3000:3000 --env-file .env chatgpt-mirror
```

### Run with the config file

```bash
$ docker run -d -p 3000:3000 --env-file .env -v $(pwd)/config/app.config.json:/app/config/app.config.json chatgpt-mirror
```

## Configuration

You can configure the app by copying the `config/example.json` to `config/app.config.json`
and editing its values. Note: comments are not allowed in JSON files.

## Error messages

Error messages for the OpenAI API can be customized by editing the `config/app.config.json` file. See the examples in the `config/example.json` file.

## Credits

Thanks: [transitive-bullshit/chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

## License

[MIT licensed](LICENSE).
