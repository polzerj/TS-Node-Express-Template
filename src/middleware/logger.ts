import { Middleware, Request, Response } from "@tsEx/types";

const loggerMiddleware: Middleware = (req: Request, resp: Response, next) => {
    console.log("Request logged:", req.method, req.path);
    next();
};

export default loggerMiddleware;
