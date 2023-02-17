// function myFunction() {
//     console.log("Hello")
// }

// var f = myFunction

// console.log(f())
// f()

// function myFunction() {
//     console.log("Hello")
// }

function example2(myfunc) {
    myfunc()
}

function example(callback) {
    example2(callback)
}

var f = () => { console.log("Hello") }
example(f)





// () => { console.log("Goodbye") }

// function myFunction(name) {
//     console.log(`Hello, ${name}`)
// }

// (name) => { console.log(`Goodbye, ${name}`)}

// myFunction("Joe")

