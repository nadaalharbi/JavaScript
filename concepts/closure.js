/*
CLOSURE: 
is when inner function returned from the outer function 
before being executed.(if not exist an inner variable to use)
*/

function closure() {
    var name = "Nada"
    function displayName() {
        //var name = "Omar"
        console.log(name)
    }
    return displayName
}
var myClosure = closure()
myClosure()


var e = 10 // global scope
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                var e = 20
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // Output: if local var exist 30, Otherwise 20(by taking the global one)
