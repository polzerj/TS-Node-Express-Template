import { Request, Response, Router } from "express";

export default abstract class ControllerBase {
    path: string;
    public router = Router();

    public get Path() {
        return this.path;
    }

    constructor(path: string) {
        this.path = path;
        this.initRoutes();
    }

    public initRoutes() {
        !!this.get && this.router.get(this.path, this.get);
        !!this.post && this.router.post(this.path, this.post);
        !!this.delete && this.router.delete(this.path, this.delete);
        !!this.put && this.router.put(this.path, this.put);
        !!this.patch && this.router.patch(this.path, this.patch);
    }

    get(req: Request, res: Response) {
        res.sendStatus(404);
    }
    post(req: Request, res: Response) {
        res.sendStatus(404);
    }
    delete(req: Request, res: Response) {
        res.sendStatus(404);
    }
    put(req: Request, res: Response) {
        res.sendStatus(404);
    }
    patch(req: Request, res: Response) {
        res.sendStatus(404);
    }
}
