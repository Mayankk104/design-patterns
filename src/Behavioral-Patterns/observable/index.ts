import Chart from "./Chart";
import DataSource from "./DataSource";
import SpreadSheet from "./SpreadSheet";

const datasource = new DataSource();

const spreeadsheet = new SpreadSheet(datasource);
const chart0 = new Chart(datasource);
const chart1 = new Chart(datasource);

datasource.attach(spreeadsheet);
datasource.attach(chart1);
datasource.attach(chart0);

console.log('====================================');
datasource.addValue(5);

console.log('====================================');
datasource.detach(chart0);

console.log('====================================');
datasource.addValue(10);

console.log('====================================');