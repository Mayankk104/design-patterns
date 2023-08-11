import Directory from "./Directory";
import File from "./Files";

const dir1 = new Directory('desktop');
const dir2 = new Directory('codes');
const file1 = new File('payslips', 'xml');

dir1.addContent(dir2);
dir2.addContent(file1);

dir1.move('home', 'root')