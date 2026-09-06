import Aggregator from "./Aggregator";
import AlphabeticalOrderIterator from "./AlphabeticalOrderIterator";
import { Iterator } from "./Iterator";

class WordsCollections implements Aggregator<string> {
    private _items: string[] = [];

    getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }

    addItem(item: string) {
        this.items.push(item);
    }

    getCount(): number {
        return this._items.length; // TODO: implement
    }

    get items() {
        return this._items;
    }
}

export default WordsCollections;
