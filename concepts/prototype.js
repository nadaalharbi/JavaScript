
// Without using PROTOTYPE
function Book(title, author) {
    this.title = title,
        this.author = author,
        this.getDetails = function () {
            return this.title + " book is written by " + this.author
        }
}
var Book1 = new Book("The power of now", "Eckhart")
var Book2 = new Book("Eloquent JavaScript", "Marijn")
console.log(Book1.getDetails()) //output: The power of now book written by Eckhart
console.log(Book2.getDetails()) //output: Eloquent JavaScript book written by Marijn


/* 
Using PROTOTYPE
Prototype is stored in memory once 
And all the instances can access  it instead of copying it each time.
Prototype-based-> can add/remove properties dynamically at run time whereas, Class-based cannot
*/
function BookPrototype(title, author) {
    this.title = title,
        this.author = author

        BookPrototype.prototype.getDetails = function () {
        return "title: " + title + " , author: " + author
    }
}

var newBook = new BookPrototype("The power of now", "Eckhart")
console.log(newBook.getDetails())
// Adding new proparty
BookPrototype.prototype.nationality = "English"
console.log(newBook.nationality)
console.log(newBook.__proto__ === BookPrototype.prototype)// true