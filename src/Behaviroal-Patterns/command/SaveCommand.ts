import CustomerService from "./CustomerService";
import Command from "./package/Command";

class SaveCommand implements Command {

    constructor(private customerService: CustomerService) {

    }

    execute = () => {
        this.customerService.addCustomer();
    };
}

export default SaveCommand;