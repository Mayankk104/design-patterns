package DesignPatterns.Behaviorals.Observer;

public class UI implements Observer<Integer>{
    @Override
    public void update(Integer count) {
        System.out.println("Rendering UI... Your Balance Is: " +count.toString());
    }
}
