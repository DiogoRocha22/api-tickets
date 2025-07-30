import http from 'node:http';
import { jsonHandler } from './middlewares/jsonHandler.js';

const listener = async (req, res) => {
  await jsonHandler(req, res);
  console.log(req.body);
}

const server = http.createServer(listener).listen(3000);