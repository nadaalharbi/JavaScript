
// PROMISES
const p = new Promise((resolve, reject) => {
    const a = 1 + 1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

p.then((msg) => {
    console.log("this is the then " + msg)
}).catch((msg) => {
    console.log("this is the catch " + msg)
})