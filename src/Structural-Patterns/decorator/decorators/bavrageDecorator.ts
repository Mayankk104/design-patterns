import Bavrage from "../bavrages";

abstract class BavrageDecorator implements Bavrage {
    constructor(private bavrage: Bavrage) {}

    abstract getDescription();
    abstract getCost();
}

export default BavrageDecorator;
