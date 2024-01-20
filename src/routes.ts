import { Express, Response, Request } from "express";
import { createUserHandler } from "./controller/user.controller";
import validadeResource from "./middleware/validadeResource";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionHandler, deleteUserSessionHandler, getUserSessionHandler } from "./controller/session.controller";
import { createSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/product.schema";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";

function routes(app: Express) {

  app.get('/heathcheck', (req: Request, res: Response) => { return res.sendStatus(200); })

  app.post('/api/users', validadeResource(createUserSchema), createUserHandler)

  app.post('/api/sessions', validadeResource(createSessionSchema), createUserSessionHandler)

  app.get("/api/sessions", requireUser, getUserSessionHandler)

  app.delete("/api/sessions", requireUser, deleteUserSessionHandler)

  app.post(
    "/api/products",
    [requireUser, validadeResource(createProductSchema)],
    createProductHandler
  );

  app.put(
    "/api/products/:productId",
    [requireUser, validadeResource(updateProductSchema)],
    updateProductHandler
  );

  app.get(
    "/api/products/:productId",
    validadeResource(getProductSchema),
    getProductHandler
  );

  app.delete(
    "/api/products/:productId",
    [requireUser, validadeResource(deleteProductSchema)],
    deleteProductHandler
  );

}
export default routes;
