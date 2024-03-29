import mongoose from "mongoose";
import config from "config";
import logger from "./logger";


async function connect() {
  const dbUri = config.get<string>("dbUri");
  logger.error("aqui ", dbUri);
  try {
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (error) {

      logger.error("Could not connect to db: ", error, dbUri);
    
      process.exit(1);
  }
}

export default connect;