import App from "./app";

import bodyParser = require("body-parser");
import loggerMiddleware from "./middleware/logger";

import HelloWorldController from "./controllers/HelloWorld.controller";

const app = new App({
    controllers: [new HelloWorldController()],
    middleWares: [
        // It is not deprecated if not used as function
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
    ],
    baseUrl: "/api",
});

app.listen();
