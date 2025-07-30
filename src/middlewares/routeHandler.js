import { ApiError } from "../helpers/ApiError.js";
import { routes } from "../routes/index.js";

export async function routeHandler(req, res, database) {
  try {
    console.log("Methodreq:", req.method)
    const route = routes.find((route) => route.method === req.method && route.path === req.url);

    if (route) {
      return await route.controller(req, res, database);
    }

    res.writeHead(404)
    res.end(JSON.stringify(ApiError.notFound()));
  }
  catch (error) {
    console.log(error);
  }
}