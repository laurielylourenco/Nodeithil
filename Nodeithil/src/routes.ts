import { Express, Response, Request } from "express";
import { createUserHandler } from "./controller/user.controller";
import validadeResource from "./middleware/validadeResource";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionHandler, deleteUserSessionHandler, getUserSessionHandler } from "./controller/session.controller";
import { createSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/product.schema";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";


/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               passwordConfirmation:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 * /api/sessions:
 *   post:
 *     summary: Create a new session
 *     tags:
 *       - Sessions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Session created successfully
 *       400:
 *         description: Bad request
 *   get:
 *     security:
 *        - bearerAuth: []
 *     summary: Get sessions
 *     tags:
 *       - Sessions
 *     responses:
 *       200:
 *         description: Sessions retrieved successfully
 *       401:
 *         description: Unauthorized
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete session
 *     tags:
 *       - Sessions
 *     responses:
 *       200:
 *         description: Session deleted successfully
 * /api/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 *   get:
 *     summary: Get product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *       404:
 *         description: Product not found
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */

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
