import { Express, Response, Request, NextFunction, ErrorRequestHandler } from "express"
import logger from "../utils/logger"
import { omit } from "lodash";
import { createUser } from "../service/user.service"
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {

    try {
        /* Criando usuario */
        const user = await createUser(req.body) // onde esta erro
        return res.send(omit(user.toJSON(),"password"));

    } catch (error: any) {

        logger.error(error)
        return res.status(409).send(error.message)
    }
}