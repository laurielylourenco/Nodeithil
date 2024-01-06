import { Express, Response, Request, NextFunction, ErrorRequestHandler } from "express"
import { AnyZodObject } from "zod"

const validade = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try {

        schema.parse({
            body:req.body,
            query: req.query,
            params: req.params
        })        


    } catch (e:any) {


        return res.status(400).send(e.errors)
        //logger.error(error)
    }
}


export default validade