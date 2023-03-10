var Artist = /** @class */ (function () {
    function Artist(name) {
        this.name = name;
    }
    Artist.prototype.announce = function () {
        return 'Hello, my name is ' + this.name;
    };
    return Artist;
}());
// create a new instance
var firstcustomer = new Artist('Bruce');
var newMessage = firstcustomer.announce();
// change the text on the page
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
