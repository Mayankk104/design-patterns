export interface Iterator<T> {
    hasNext(): boolean;
    current(): T | null;
    next(): T | null;
}
