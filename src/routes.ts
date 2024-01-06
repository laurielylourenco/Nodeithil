import { Express, Response, Request } from "express";


function routes(app: Express) {


    app.get('/heathcheck', (req: Request, res: Response) => {

        
        return res.sendStatus(200)
    })



}
export default routes;
