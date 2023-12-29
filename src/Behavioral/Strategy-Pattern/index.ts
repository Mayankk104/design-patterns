import PaymentType from "./Strategies/PaymentTypes";
import Amazon from "./amazon";

const amazon = new Amazon();

amazon.pay(500, PaymentType.CASH);
amazon.pay(500, PaymentType.CREDIT_CARD);

