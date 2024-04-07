import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express, Request, Response } from 'express';
import path from 'path';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rest API',
      description: "API cria usuários (create), sessões e produtos (CRUD). Requisições autenticadas por token fazem CRUD em produtos é sessões.",
      contact: {
        name: "Lauriely Lourenço",
        email: "laurielylourenco@gmail.com",
        url: "https://github.com/laurielylourenco/Nodeithil"
      },
      version: '1.0.0',
    }
  }, apis: ["**/*.ts"]


};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number): void {

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
