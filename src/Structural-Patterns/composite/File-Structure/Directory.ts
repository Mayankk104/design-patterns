import Actions from "./Action";

class Directory implements Actions {
    directorId: number;
    content: Actions[] = [];

    constructor(private directorytName: string) {
        this.directorId = Math.floor(Math.random() * 100)
    }

    move(from: string, to: string) {
        for (const item of this.content) {
            item.move(from, to)
        }
        console.log(`directory:${this.directorytName} directory id: ${this.directorId} moving from: ${from} to: ${to}`);
    };

    delete() {
        // console.log(`deleting directory ${this.directorId}`);
    }   

    addContent(content: Actions) {
        this.content.push(content);
    }
}

export default Directory;