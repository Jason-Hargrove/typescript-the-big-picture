"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
        this.isActive = true;
    }
    announce() {
        return 'Hello, my name is ' + this.name;
    }
}
exports.Customer = Customer;
// create a new instance
// let firstcustomer = new Customer('Bruce')
// let newMessage: string = firstcustomer.announce()
// change the text on the page
// let webHeading = document.querySelector('h1')
// webHeading!.textContent = newMessage
// class SpecialCustomer extends Customer {
//   //...
// }
