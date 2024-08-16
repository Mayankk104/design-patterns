// ======== implementation 1 =========
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

    error(message: string) {
        console.error(message);
    }
}

// ========= implementation 2 =========
// class Logger {
//     private static instance;

//     constructor() {
//         if (!Logger.instance) Logger.instance = this;
//         return Logger.instance;
//     }

//     error(message: string) {
//         console.error(message);
//     }
// }

export default Logger;

// NOTE: JS transplied version doesn't look like that
