import CompositeCommand from "./CompostieCommand";
import CustomerService from "./CustomerService";
import AutoSave from "./package/AutoSave";
import Button from "./package/Button";
import SaveCommand from "./SaveCommand";
import UndoCommand from "./UndoCommand";

const customerService = new CustomerService();
const saveCommand = new SaveCommand(customerService);

// ==== several ways to execute same command ==== 
// const button = new Button(saveCommand);
// const autoSave = new AutoSave(saveCommand);
// const keyboardShortcuts = new KeyboardShortcuts(saveCommand); ... 
// button.click();
// autoSave.autoSave();

// ====  execute set of command toughter ====
const compositeCommand = new CompositeCommand();
const undoCommand = new UndoCommand();

compositeCommand.add(saveCommand);
compositeCommand.add(undoCommand);
compositeCommand.execute();
