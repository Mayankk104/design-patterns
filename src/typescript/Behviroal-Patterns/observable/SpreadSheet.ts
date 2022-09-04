import Observer from "./Observer";

class SpreadSheet implements Observer {
    observerId: string = '';

    update = () => {
        console.log('I got the update')
        return;
    };

}

export default SpreadSheet;