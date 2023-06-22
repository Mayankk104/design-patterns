class CustomerService {
    async addCustomer() {
        console.log("saving customer...");

        setTimeout(() => {
            console.log('customer saved ✅');
        }, 2000)
    }
}

export default CustomerService;