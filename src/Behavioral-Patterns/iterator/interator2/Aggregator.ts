import { Iterator } from "./Iterator";

export default interface Aggregator<T> {
    getIterator(): Iterator<T>;
}
