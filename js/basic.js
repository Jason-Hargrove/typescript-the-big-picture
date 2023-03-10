"use strict";
class Artist {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return 'Hello, my name is ' + this.name;
    }
}
// create a new instance
let firstcustomer = new Artist('Bruce');
let newMessage = firstcustomer.announce();
// change the text on the page
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
