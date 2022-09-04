import { Memento, Caretaker } from "./interface";

class Content implements Memento {
    private readonly state: string;

    constructor(content: string) {
        this.state = content
    }

    getState() {
        return this.state;
    };
}

class History implements Caretaker {
    private history: Memento[] = [];

    push = (state: Memento) => {
        this.history.push(state)
    }

    pop = () => {
        if (this.history.length >= 2)
            this.history.pop()

        return this.history.at(-1)!;
    };
}

export class NotePad {
    private content: string = '';
    private histroy: History = new History();

    write(message: string) {
        const content: Content = new Content(message);
        this.content = content.getState();
        this.histroy.push(content)
    }

    undo() {
        this.content = this.histroy.pop().getState();
    }

    getContent(): string {
        return this.content;
    }
}

// =======================
// Implimetation
// =======================

export function implementation() {
    const notepad = new NotePad();
    notepad.write('Microsoft');
    notepad.write('Facebook');
    notepad.write('Google');

    console.log(notepad.getContent());
    notepad.undo();
    console.log(notepad.getContent());
    notepad.undo();
    console.log(notepad.getContent())
    notepad.undo();
    console.log(notepad.getContent())
}
