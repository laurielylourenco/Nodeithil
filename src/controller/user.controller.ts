import { Express, Response, Request, NextFunction, ErrorRequestHandler } from "express"
import logger from "../utils/logger"
import { createUser } from "../service/user.service"
//import { AnyZodObject } from "zod"


export async function createUserHandler(req: Request, res: Response) {

    try {
        /* Criando usuario */
     const user = await createUser(req.body)
     return user;

    } catch (error: any) {

        logger.error(error)
        return res.status(409).send(error.message)
    }


}