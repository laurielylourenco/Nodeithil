import { Express, Response, Request, NextFunction } from "express";
import { AnyZodObject } from "zod";

// Validação feita pelo objeto do Zod com regras
const validate = (schema: AnyZodObject) => (req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        
        next(); // Avança para o próximo middleware se a validação for bem-sucedida
    } catch (e: any) {
        res.status(400).send(e.errors);
    }
};

export default validate;
