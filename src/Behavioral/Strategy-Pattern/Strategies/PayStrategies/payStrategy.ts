export default interface PayStrategy {
    pay(amount: number): Promise<boolean>;
}
