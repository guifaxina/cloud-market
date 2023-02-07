import app from "./utils/app";
import logger from "./utils/logger"

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info("Server running on http://localhost:3000"));