package DesignPatterns.Behaviorals.Observer;

public class Client {
    public void renderHomePage(){
        UI ui = new UI();
        MailService mail = new MailService();
        Count count = new Count();

        count.increment();
        count.subscribe(ui);
        count.increment();
        count.subscribe(mail);
        count.decrement();
        count.unsubscribe(mail);
        count.increment();
    }
}
