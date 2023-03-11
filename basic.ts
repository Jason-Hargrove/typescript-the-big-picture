export class Customer {
  name: string
  isActive: boolean

  constructor(name: string) {
    this.name = name
    this.isActive = true
  }

  public announce() {
    return 'Hello, my name is ' + this.name
  }
}

// create a new instance
// let firstcustomer = new Customer('Bruce')
// let newMessage: string = firstcustomer.announce()

// change the text on the page
// let webHeading = document.querySelector('h1')
// webHeading!.textContent = newMessage

// class SpecialCustomer extends Customer {
//   //...
// }
