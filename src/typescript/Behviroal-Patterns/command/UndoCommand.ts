import Command from "./package/Command";

class UndoCommand implements Command {
    execute() {
        console.log('Undoing...');
        setTimeout(() => {
            console.log('UnDone ✅');
        }, 2000);
    }
}

export default UndoCommand;