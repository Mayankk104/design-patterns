import Command from "./Command";

class Button {

    constructor(private command: Command) { }

    click() {
        this.command.execute();
    }
}

export default Button;