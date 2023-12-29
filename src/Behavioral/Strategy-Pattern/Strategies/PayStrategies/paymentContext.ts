import PaymentType from "../PaymentTypes";
import PayStrategy from "./payStrategy";
import CashPaymentStrategy from "./cashPaymentStrategy";
import CreditCardPayment from "./creditCardPay";

class PaymentContext {
    private paymentStrategy: PayStrategy;

    constructor(strategy: PaymentType = PaymentType.CASH) {
        this.setPaymentStrategy(strategy);
    }

    setPaymentStrategy(payStrategy: PaymentType) {
        switch (payStrategy) {
            case "cash":
                this.paymentStrategy = new CashPaymentStrategy();
                break;
            case "credit_card":
                this.paymentStrategy = new CreditCardPayment();
                break;
            default:
                throw new Error("invalid payment type");
        }
    }

    executePay(amount: number) {
        if (!this.paymentStrategy) throw Error("strategy is not set");
        this.paymentStrategy.pay(amount);
    }
}

export default PaymentContext;
