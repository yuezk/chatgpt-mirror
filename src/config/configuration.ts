import { readFileSync } from 'fs';
import { join } from 'path';
import stripJsonComments from 'strip-json-comments';
import { fileURLToPath } from 'url';
import { AppConfig } from './configuration.types';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const APP_CONFIG_FILE_NAME = 'app.config.json';
const APP_CONFIG_FILE_PATH = join(__dirname, '..', '..', 'config', APP_CONFIG_FILE_NAME);

export default function () {
  try {
    const json = stripJsonComments(readFileSync(APP_CONFIG_FILE_PATH, 'utf8'));
    console.log(json)
    return JSON.parse(json) as AppConfig;
  } catch (err) {
    return null;
  }
}
