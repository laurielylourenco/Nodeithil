import { Express, Response, Request } from "express";
import { createUserHandler } from "./controller/user.controller";
import validadeResource from "./middleware/validadeResource";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionHandler, deleteUserSessionHandler, getUserSessionHandler } from "./controller/session.controller";
import { createSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";

function routes(app: Express) {

  app.get('/heathcheck', (req: Request, res: Response) => {

    return res.sendStatus(200)
  })
  app.post('/api/users', validadeResource(createUserSchema), createUserHandler)

  app.post('/api/sessions', validadeResource(createSessionSchema), createUserSessionHandler)

  app.get("/api/sessions", requireUser, getUserSessionHandler)

  app.delete("/api/sessions", requireUser, deleteUserSessionHandler)



}
export default routes;
