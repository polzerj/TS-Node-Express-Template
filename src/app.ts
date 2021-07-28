import ControllerBase from "controllers/ControllerBase";
import * as express from "express";
import { Application } from "express";

const standardInit = {
    port: 5000,
    controllers: [],
    middleWares: [],
    baseUrl: "/",
};

class App {
    public app: Application;
    public port: number;
    baseUrl: string;

    constructor(appInit?: {
        port?: number;
        middleWares?: any[];
        controllers?: ControllerBase[];
        baseUrl?: string;
    }) {
        appInit = { ...standardInit, ...appInit };
        this.app = express();
        this.port = appInit.port;
        this.baseUrl = appInit.baseUrl;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
    }

    private middlewares(middleWares: {
        forEach: (arg0: (middleWare: any) => void) => void;
    }) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: ControllerBase[]) {
        controllers.forEach((controller) => {
            this.app.use(this.baseUrl, controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(
                `App listening on the http://localhost:${this.port}/api`
            );
        });
    }
}

export default App;
