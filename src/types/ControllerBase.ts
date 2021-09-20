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
        this.router.get(this.path, this.get);
        this.router.post(this.path, this.post);
        this.router.delete(this.path, this.delete);
        this.router.put(this.path, this.put);
        this.router.patch(this.path, this.patch);
    }

    get(req: Request, res: Response) {
        res.sendStatus(405);
    }
    post(req: Request, res: Response) {
        res.sendStatus(405);
    }
    delete(req: Request, res: Response) {
        res.sendStatus(405);
    }
    put(req: Request, res: Response) {
        res.sendStatus(405);
    }
    patch(req: Request, res: Response) {
        res.sendStatus(405);
    }
}
