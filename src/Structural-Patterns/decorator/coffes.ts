import Bavrage from "./bavrages";

export class Decaf extends Bavrage {
    getDescription(): string {
        return "decaf";
    }

    getCost(): number {
        return 2;
    }
}

export class Expreso extends Bavrage {
    getDescription(): string {
        return "expreso";
    }
    getCost(): number {
        return 3; // base cost
    }
}
