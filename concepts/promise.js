
/* PROMISES: 
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
*/


const promise = new Promise((resolve, reject) => {
    const a = 1 + 1
    if (a == 2) {
        resolve(100)
    } else {
        reject(400)
    }
})
promise.then((successMessage) => {
    console.log("this is the then ", successMessage)
}).catch((failureMessage) => {
    console.log("this is the catch " , failureMessage)
})

//----------------

let connect = new Promise((resolve, reject) => {
    let isConnect = false
    if (isConnect) {
        resolve("Connected")
    } else {
        reject("Not Connected")
    }
})

connect.then((fromResolve) => {
    console.log("The system is " + fromResolve)
}).catch((fromReject) => {
    console.log("The system is " + fromReject)
})