import DataSource from "./DataSource";
import Observer from "./Observer";

class Chart implements Observer {
    observerId: string = Math.floor(Math.random() * 1000).toString();

    constructor(private datasource: DataSource) { }

    update() {
        console.log(`CHART[id: ${this.observerId}]: DataSource has been updated ${JSON.stringify(this.datasource.data)}`)
    };
}

export default Chart;