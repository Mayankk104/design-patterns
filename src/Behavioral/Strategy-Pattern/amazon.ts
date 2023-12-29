import PayStrategy from "./Strategies/PayStrategies/payStrategy";
import PaymentContext from "./Strategies/PayStrategies/paymentContext";
import PaymentType from "./Strategies/PaymentTypes";

class Amazon {
    private paymentService: PaymentContext = new PaymentContext();

    pay(amount: number, type: PaymentType) {
        this.paymentService.setPaymentStrategy(type);
        this.paymentService.executePay(amount);
    }
}

export default Amazon;
