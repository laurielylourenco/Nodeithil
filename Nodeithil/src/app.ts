
import express from "express"
import config from 'config'
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";
import cors from 'cors';
const port = config.get<number>('port')
const app = express();

app.use(express.json())
app.use(deserializeUser)


app.listen(port, async () => {
    console.log("aqui", port)
    logger.info(`Porta on 234234 ${port}`)
    await connect();
    routes(app)

})
