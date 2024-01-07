import { Express, Response, Request } from "express";
import { createUserHandler } from "./controller/user.controller";
import validadeResource from "./middleware/validadeResource";
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {


    app.get('/heathcheck', (req: Request, res: Response) => {

        return res.sendStatus(200)
    })
    app.post('/api/users',validadeResource(createUserSchema), createUserHandler)

  
    
}
export default routes;
