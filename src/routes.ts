import { Express, Response, Request } from "express";
import { createUserHandler } from "./controller/user.controller";


function routes(app: Express) {


    app.get('/heathcheck', (req: Request, res: Response) => {

        return res.sendStatus(200)
    })
    app.post('/api/users', createUserHandler)


}
export default routes;
