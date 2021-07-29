# TS-Node-Express-Template

This is a template to create an Express-Server using Typescript

Entry point: `src/server.ts`
There you can also find the configuration for the `baseUrl`, `controllers`, `middleWares` and `port`

### Example:
```js
// file: src/server.ts

import App from "./app";

import bodyParser = require("body-parser");

import HelloWorldController from "./controllers/HelloWorld.controller";

const app = new App({
    controllers: [new HelloWorldController()],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ],
    port: 5000,
    baseUrl: "/",
});

app.listen();
```

## Register routes

Create a new class inheriting from `ControllerBase` in `src/controllers`

Invoke the base constructor with the path as parameter.
Now you only have to override the methods you would like to use:

-   `get`
-   `post`
-   `delete`
-   `put`
-   `patch`

To register the controller add an instance to the corresponding array in `src/server.ts`

### Example:

```js
// file: src/controllers/HelloWorldController.ts

import { ControllerBase, Request, Response } from "@tsEx/types";

export default class HelloWorldController extends ControllerBase {
    constructor() {
        super("/");
    }

    get(req: Request, res: Response) {
        res.send("Hello World!");
    }
}
```
