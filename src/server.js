import http from 'node:http';
import { jsonHandler } from './middlewares/jsonHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';

const listener = async (req, res) => {
  await jsonHandler(req, res);
  await routeHandler(req, res);
}

const server = http.createServer(listener).listen(3000);