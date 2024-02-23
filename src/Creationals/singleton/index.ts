import Logger from "./logger";

const logger = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger === logger2);
