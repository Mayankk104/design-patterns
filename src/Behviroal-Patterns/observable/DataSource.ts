import Observable from "./Observable";
import Observer from "./Observer";

class DataSource implements Observable {
    private _data: number[] = [];
    private observers: Observer[] = [];

    public set data(data: number[]) {
        this._data = data;
        this.notify();
    }

    public attach = (observer: Observer) => {
        this.observers.push(observer);
    };

    public detach = (observer: Observer) => {
        console.log(this.observers.map(observer => observer.observerId));
        const observerIndex = this.observers.findIndex(localObserver => observer.observerId === localObserver.observerId);
        console.log(observerIndex);
        if (observerIndex === -1) return;
        let x = this.observers.splice(observerIndex, 1);
        console.log(x.map(x => x.observerId));
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