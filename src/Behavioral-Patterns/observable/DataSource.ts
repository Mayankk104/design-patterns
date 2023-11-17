import Observable from "./Observable";
import Observer from "./Observer";

class DataSource implements Observable {
    private _data: number[] = [];
    private observers: Observer[] = [];

    public set data(data: number[]) {
        this._data = data;
        this.notify();
    }

    public addValue(num: number) {
        this._data.push(num);
        this.notify()
    }

    public attach(observer: Observer) {
        console.log(`Obsrver[id:${observer.observerId}]: subscribed`);
        this.observers.push(observer);
    };

    public detach(observer: Observer) {
        const observerIndex = this.observers.findIndex(localObserver => observer.observerId === localObserver.observerId);
        if (observerIndex === -1) return;
        const x = this.observers.splice(observerIndex, 1);
        console.log(`Obbserver[id:${observer.observerId}]: got unsubscribe`)
    };

    public notify = () => {
        for (let observer of this.observers) {
            observer.update();
        }
    };

    get data() {
        return this._data;
    }

};

export default DataSource;