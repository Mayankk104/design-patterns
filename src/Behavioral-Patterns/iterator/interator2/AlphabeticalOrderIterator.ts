import { Iterator } from "./Iterator";
import WordsCollections from "./WordsCollection";

class AlphabeticalOrderIterator implements Iterator<string> {
    private position = 0;

    constructor(
        private collection: WordsCollections,
        private reverse: boolean = false
    ) {
        if (reverse) this.position = this.collection.items.length - 1;
    }

    hasNext(): boolean {
        if (this.reverse) return this.position >= 0;

        return this.collection.items.length > this.position;
    }

    current(): string | null {
        return this.collection.items[this.position];
    }

    next(): string | null {
        if (
            !(this.position >= 0) ||
            !(this.position < this.collection.items.length)
        )
            return null;

        const item = this.collection.items[this.position];
        this.reverse ? --this.position : ++this.position;
        return item;
    }
}

export default AlphabeticalOrderIterator;
