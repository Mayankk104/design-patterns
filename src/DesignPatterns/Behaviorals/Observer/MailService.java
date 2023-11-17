package DesignPatterns.Behaviorals.Observer;

public class MailService implements Observer<Integer>{

    @Override
    public void update(Integer value) {
        System.out.println("Sending Mail...Your Balance is updated to " +value);
    }
}
