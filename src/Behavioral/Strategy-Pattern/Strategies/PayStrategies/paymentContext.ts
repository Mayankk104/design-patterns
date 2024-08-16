import PaymentType from "../PaymentTypes";
import PayStrategy from "./payStrategy";
import CashPaymentStrategy from "./cashPaymentStrategy";
import CreditCardPayment from "./creditCardPay";
import PaymentAdditionalInfo from "./PaymentAdditionalInfo";

class PaymentContext {
    private paymentStrategy: PayStrategy | null = null;

    setPaymentStrategy(payStrategy: PaymentType, paymentAdditionalInfo: PaymentAdditionalInfo) {
        switch (payStrategy) {
            case "cash":
                this.paymentStrategy = new CashPaymentStrategy();
                break;
            case "credit_card":
                this.paymentStrategy = new CreditCardPayment(paymentAdditionalInfo?.credit_card?.cardNumber);
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
