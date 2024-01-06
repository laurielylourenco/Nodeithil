
import express from "express"
import config from 'config'
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";


const port = config.get<number>('port')


const app = express();

logger.info(
    "Hello world from ok?"
)


app.listen(port, async () => {
    logger.info(`
        Porta on 
    `)
    routes(app)
    await connect();
})
