// fizz Buzz

let maxNumber = 15
let i = 1
// 1 - maxNumber
// let fizz = ("i bisa dibagi habis 3")
// let buzz = ("i bisa dibagi habis 5")
// let fizzBuzz = ("i bisa dibagi habis 3 & 5")


// for (let i = 1; i <= maxNumber; i++) {
//     if (i % 3 == 0)
//     console. log("fizz")
//     else if (i % 5 == 0) {
//         console. log("Buzz") 
//     }else if (i % 3 == 0  ||  i % 5 == 0) {
//         console. log("fizzBuzz")
//     }else {
//         console. log(i)
//     }
// }


for (let i = 1; i <= maxNumber; i++) {
    if (i % 3 ==0 && i % 5 ==0) {
        console. log("FizzBuzz")
    } else if (i % 3 ==0) {
        console. log("Fizz")
    }else if (i % 5 ==0) {
        console. log("Buzz")
    }else {
        console. log(i)
    }
}