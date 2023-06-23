import Command from "./package/Command";


class CompositeCommand implements Command {
    private readonly commands: Command[] = [];

    add(command: Command) {
        this.commands.push(command)
    }

    execute() {
        this.commands.forEach(command => {
            command.execute();
        })
    }
}

export default CompositeCommand;