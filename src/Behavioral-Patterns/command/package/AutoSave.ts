import Command from "./Command";

class AutoSave {
    constructor(private command: Command) { }

    autoSave() {
        setInterval(() => {
            this.command.execute();
        }, 5000)
    }
};

export default AutoSave;