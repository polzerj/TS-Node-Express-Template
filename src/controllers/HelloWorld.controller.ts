import { ControllerBase, Request, Response } from "@tsEx/types";

export default class HelloWorldController extends ControllerBase {
    constructor() {
        super("/");
    }

    get(req: Request, res: Response) {
        const testData = { hello: "World" };

        res.json(testData);
    }

    post(req: Request, res: Response) {
        let { body, query } = req;
        res.json({ query, body });
    }
}
