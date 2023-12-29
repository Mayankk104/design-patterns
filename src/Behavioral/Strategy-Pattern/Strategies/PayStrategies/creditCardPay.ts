import PayStrategy from "./payStrategy";

class CreditCardPayment implements PayStrategy {
    cardNumber: String;

    async pay(amount: number): Promise<boolean> {
        try {
            await this.cardPaymentStrategy(amount, this.cardNumber);
            return true;
        } catch (error) {
            const err = error as Error;
            console.log(err.message);
            return false;
        }
    }

    async cardPaymentStrategy(amount: number, cardNumber: String) {
        console.log(`${amount} amount paid through credit card`);
    }
}

export default CreditCardPayment;
