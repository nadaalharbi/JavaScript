// CLASSES & Constructor
class User {
    constructor(name, pass) {
        this.name = name
        this.pass = pass
    }
}
// Creating Object
const user1 = new User('Nada', 111);
console.log(user1);


// Golobal scoping 
const greeting = 'Welcome to blog';

//IIFE (Immediately Invoked Function Expression)
//to have a limited acces const (local)
(function () {
    const greeting = 'Hello';
    console.log(greeting);
    /* Output: Welcome to blog if there's no local variable 
    Otherwise it will take the local const. Output: Hello
    */
})()

function Student(name) {
    const displayName = function (greeting) {
        console.log(greeting + ' ' + name);
    }
    return displayName;
}
const myFunc = Student('Nada');
console.log(myFunc);
myFunc('Welcome '); //Output: Welcome Nada
myFunc('Hello '); //output: Hello Nada


const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);
/*
OR: using object-initializer
And the object property can be another object with its own properties.
*/
const myCar2 = {
    make: 'Ford',
    model: 'Mustang',
    date: { year: 1969, month: 02, day: 12 }
}
console.log(myCar2);

// Setter And Getter 
const myObject = {
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