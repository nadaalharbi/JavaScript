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
