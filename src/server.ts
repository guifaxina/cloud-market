import app from "./utils/app";
import logger from "./utils/logger";
import Connection from "./utils/connect-aws-rds";

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  logger.info("Server running on http://localhost:3000");
  await Connection.execute();
});
