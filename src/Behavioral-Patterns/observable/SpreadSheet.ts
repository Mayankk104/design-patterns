import DataSource from "./DataSource";
import Observer from "./Observer";

class SpreadSheet implements Observer {
    observerId: string = Math.floor(Math.random() * 1000).toString();

    constructor(private datasource: DataSource) { }

    public update() {
        console.log(`SPREEDSHEET[id:${this.observerId}]: DataSource has been updated ${JSON.stringify(this.datasource.data)}`);
        return;
    };

}

export default SpreadSheet;