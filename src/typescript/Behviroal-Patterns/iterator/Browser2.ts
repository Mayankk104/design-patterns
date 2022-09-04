import { Iterator } from "./Iterator";
import { LinkedList } from 'datastructures-js';

class Browser {
    constructor(private history: BrowserHistory) { }

    implimentation() {
        this.history.push("a");
        this.history.push("b");
        this.history.push("c");

        const itr: Iterator<string> = this.history.createIterator();

        while (itr.hasNext()) {
            console.log(itr.current());
            itr.next();
        }
    }
}

class BrowserHistory {
    private urls: Array<string> = [];

    public createIterator(this: BrowserHistory): Iterator<string> {
        return new BrowserHistory.ArrayIterator(this);
    }

    push(url: string) {
        this.urls.insertLast(url)
    }

    static ArrayIterator = class implements Iterator<string> {
        private browserHistory: BrowserHistory;
        private index: number;
        constructor(browserHistory: BrowserHistory) {
            this.browserHistory = browserHistory;
            this.index = 0;
        }

        hasNext(): boolean {
            if (this.browserHistory.urls.length > this.index)
                return true;
            else
                return false;
        }
        current(): string {
            return this.browserHistory.urls[this.index];
        }

        next(): void {
            if (this.hasNext())
                this.index++;
        }
    }

    // static LinkListIterator = class implements Iterator<string>{
    //     private index: number = 0;
    //     broswerHistory: BrowserHistory;

    //     constructor(browserHistory: BrowserHistory) {
    //         this.broswerHistory = browserHistory;
    //     }

    //     hasNext(): boolean {
    //         if (this.broswerHistory.urls.count() > this.index)
    //             return true;
    //         else
    //             return false;
    //     }

    //     current(): string {
    //         return this.broswerHistory.urls.toArray()[this.index]
    //     }

    //     next(): void {
    //         this.index++;
    //     }

    // }

}
const browserHistory: BrowserHistory = new BrowserHistory();
const browser: Browser = new Browser(browserHistory);

browser.implimentation();