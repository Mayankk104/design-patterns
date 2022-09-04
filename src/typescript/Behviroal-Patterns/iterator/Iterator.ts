export interface Iterator<T> { // Iterator keyword is already used by typescript
    hasNext(): boolean;
    current(): T;
    next(): void;
}