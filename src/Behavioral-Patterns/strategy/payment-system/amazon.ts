import PaymentContext from "./Strategies/PayStrategies/paymentContext";
import PaymentType from "./Strategies/PaymentTypes";

class Amazon {
    private paymentService: PaymentContext = new PaymentContext();

    pay(amount: number, type: PaymentType) {
        this.paymentService.setPaymentStrategy(type, {
            credit_card: { cardNumber: "1234 5678 9012" },
        });
        this.paymentService.executePay(amount);
    }
}

export default Amazon;
