import Observable from "./Observable";
import Observer from "./Observer";

class DataSource implements Observable {
    private _data: number[] = [];
    private observers: Observer[] = [];

    public setData(data: number) {
        this._data.push(data);
    }

    public attach = (observer: Observer) => {
        this.observers.push(observer);
    };

    public detach = (observer: Observer) => {
        const observerIndex = this.observers.findIndex(localObserver => observer.observerId === localObserver.observerId);

        if (observerIndex === -1) return;

        this.observers = this.observers.splice(observerIndex, 1);
        return;
    };

    public notify = () => {
        for (let observer of this.observers) {
            observer.update();
        }
    };

};

export default DataSource;