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

datasource.data = [...datasource.data, 1];

datasource.detach(chart0);

datasource.data = [...datasource.data, 2];