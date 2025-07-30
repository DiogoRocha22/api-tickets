import http from 'node:http';
import { jsonHandler } from './middlewares/jsonHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';
import { Database } from './database/database.js';

const database = new Database();

const listener = async (req, res) => {
  await jsonHandler(req, res);
  await routeHandler(req, res, database);
}

const server = http.createServer(listener).listen(3000);