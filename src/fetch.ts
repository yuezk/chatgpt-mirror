import fetch, {
    Headers,
    Request,
    Response,
  } from 'node-fetch';
  
globalThis.fetch = fetch
globalThis.Headers = Headers;
globalThis.Request = Request;
globalThis.Response = Response;
  
export default fetch;