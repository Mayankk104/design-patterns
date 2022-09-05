import DataSource from "./DataSource";
import Observer from "./Observer";

class SpreadSheet implements Observer {
    observerId: string = Math.floor(Math.random() * 1000).toString();

    constructor(private datasource: DataSource) { }

    update = () => {
        console.log(`I am spreedsheet and I got updated update value: ${JSON.stringify(this.datasource.data)}`);
        return;
    };

}

export default SpreadSheet;