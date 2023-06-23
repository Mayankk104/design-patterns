import Observer from "./Observer";

export default interface Observable {
    attach: (observer: Observer) => void;
    detach: (observer: Observer) => void;
    notify: () => void;
}
