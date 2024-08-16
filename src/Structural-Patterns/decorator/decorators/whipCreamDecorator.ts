import Bavrage from "../bavrages";
import BavrageDecorator from "./bavrageDecorator";

class WhipcreamDecotrator extends BavrageDecorator {
    constructor(bavrage: Bavrage) {
        super(bavrage);
    }

    getDescription() {
        throw new Error("Method not implemented.");
    }

    getCost() {
        throw new Error("Method not implemented.");
    }
}

export default WhipcreamDecotrator;
