import PayStrategy from "./payStrategy";

class CashPaymentStrategy implements PayStrategy {
    async pay(amount: number): Promise<boolean> {
        console.log(`${amount} paid through cash`);
        return true;
    }
}

export default CashPaymentStrategy;
