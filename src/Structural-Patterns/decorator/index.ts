import { Expreso } from "./coffes";
import WhipcreamDecotrator from "./decorators/whipCreamDecorator";

const expresso = new Expreso();
const whipcream = new WhipcreamDecotrator(expresso);

console.log(expresso.getCost());
