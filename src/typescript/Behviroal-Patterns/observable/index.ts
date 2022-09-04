import DataSource from "./DataSource";
import SpreadSheet from "./SpreadSheet";

const datasource = new DataSource();

const spreeadsheet = new SpreadSheet();
const spreeadsheet2 = new SpreadSheet();

datasource.attach(spreeadsheet);
datasource.attach(spreeadsheet2);

datasource.notify();