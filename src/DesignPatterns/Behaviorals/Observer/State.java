package DesignPatterns.Behaviorals.Observer;

public interface State<T> {
    void notifyy();
    void subscribe(Observer<T> observer);
    void unsubscribe(Observer<T> observer);
}
