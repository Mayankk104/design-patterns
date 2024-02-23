class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            const logger = new Logger();
            Logger.instance = logger;
        }
        return Logger.instance;
    }
}

export default Logger;

// NOTE: JS transplied version doesn't look like that
