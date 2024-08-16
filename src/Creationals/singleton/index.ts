import Logger from "./logger";

// ===== implmentation 1 ======
const logger = Logger.getInstance();
const logger2 = Logger.getInstance();

// ===== implementation 2 =====
// const logger = new Logger();
// const logger2 = new Logger();

// logger.error("random");

console.log(logger === logger2);
