import Actions from "./Action";

class File implements Actions {
    constructor(private fileName: string, private extension:string) { }

    move(from:string, to: string) {
        console.log(`moving file: ${this.fileName}.${this.extension} from: ${from} to: ${to} `); 
    }

    delete() {

    }
}


export default File;