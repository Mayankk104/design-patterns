package DesignPatterns.Behaviorals.Observer;

import java.util.ArrayList;
import java.util.List;

public class Count implements State<Integer>{
    private final List<Observer<Integer>> observers = new ArrayList<>();
    private Integer state = 1000000;
    @Override
    public void notifyy() {
        for(Observer<Integer> observer: this.observers){
            observer.update(state);
        }
    }

    @Override
    public void subscribe(Observer<Integer> observer) {
        this.observers.add(observer);
    }

    @Override
    public void unsubscribe(Observer<Integer> observer) {
        this.observers.remove(observer);
    }

    public void increment() {
        this.state++;
        this.notifyy();
    }

    public void decrement() {
        this.state--;
        this.notifyy();
    }
}
