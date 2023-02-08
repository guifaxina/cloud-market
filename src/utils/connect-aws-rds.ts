import { Sequelize } from "sequelize";
import logger from "./logger";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.AWS_RDS_DB_NAME as string,
  process.env.AWS_RDS_USERNAME as string,
  process.env.AWS_RDS_PASSWORD,
  {
    host: process.env.AWS_RDS_HOSTNAME,
    dialect: "postgres",
  }
);

class DatabaseConnection {
  public async execute(): Promise<void> {
    try {
      await sequelize.authenticate();
      logger.info("Database connection has been established successfully.");
    } catch (error) {
      logger.error(`Unable to connect to the database: ${error}`);
    }
  }
}

export default new DatabaseConnection();
