
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


//-------------------------------------------------------

// CLASSES & Constructor
class User {
    constructor(name, pass) {
        this.name = name
        this.pass = pass
    }
}
// Creating Object
var user1 = new User("Nada", 111)
console.log(user1)


// Golobal scoping 
var greeting = "Welcome to blog";

//IIFE (Immediately Invoked Function Expression)
//to have a limited acces var (local)
(function () {
    var greeting = "Hello"
    console.log(greeting) 
    /* Output: Welcome to blog if there's no local variable 
    Otherwise it will take the local var. Output: Hello
    */
})()

function Student(name) {
    var displayName = function (greeting) {
        console.log(greeting + " " + name)
    }
    return displayName
}
var myFunc = Student("Nada")
console.log(myFunc)
myFunc("Welcome ") //Output: Welcome Nada
myFunc("Hello ") //output: Hello Nada


var myCar = new Object()
myCar.make = 'Ford'
myCar.model = 'Mustang'
myCar.year = 1969
console.log(myCar)
/*
OR: using object-initializer
And the object property can be another object with its own properties.
*/
var myCar2 = {
    make: 'Ford',
    model: 'Mustang',
    date: {year:1969,month: 02,day:12}
}
console.log(myCar2)

// Setter And Getter 
var myObject = {
    num: 7,
    get getNum() { 
      return this.num + 1
    },
    set setNum(x) {
      this.num = x / 2
    }
  }
  
  console.log(myObject.num); // 7
  console.log(myObject.getNum); // 8
  myObject.setNum = 50; 
  console.log(myObject.num); // 25