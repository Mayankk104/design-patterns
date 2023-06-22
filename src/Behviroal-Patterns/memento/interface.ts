export interface Memento {
    getState: () => string;
}

export interface Caretaker {
    push: (state: Memento) => void
    pop: () => Memento
}