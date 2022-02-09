// ----------------------Pembuatan functions----------------------------
// function displayMenu () {
//     console. log("Hello World !")
// }

// displayMenu()

// ----------------------Parameter procedure-----------------------------
// function displayMenu (userName) {
// console. log(`Hello ${userName}`)
// }

// displayMenu("Doraemon!")

// --------------------------
// function displayMenu (userName = "Naruto,", greeting) {
//     console. log(`Hello,  ${greeting} ${userName}`)
//     }

//     displayMenu("Doraemon!,", "Good Morning")

// --------------------------
// function displayMenu (userName = "Naruto,", greeting) {
//     console. log(`Hello,  ${greeting} ${userName}`)
//     }

//     let userName = "Doraemon"
//     let greeting = "Good Morning"

//     displayMenu(userName, greeting)

// -----------------------------
// function sumTwoNumbers (a = 0, b = 0) {
//     console. log(a + b)
// }

// let result = sumTwoNumbers(7,5)

// console. log (result)
// sumTwoNumbers (3, 7)

// -------------------------------
// function sumTwoNumbers(a = 0, b = 0) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Gunakan tipe data yang benar!";
//   }

//   if (isNaN(a) || isNaN(b)) {
//     return "Pastikan number anda sesuai";
//   }

//   let hasil = a + b;

//   return hasil;

  //   if (hasil > 10) {
  //       return "Angka anda lebih dari 10"
  //   }

  //   return "Angka anda 10 atau lebih kecil"
// }

// let result = sumTwoNumbers(7, "");
// console. log(result)

// ---------------------------------anonymous functions----------------------------

// let a = function () {
// // ------
// }

// a()

// -------------------------------arrow functions---------------------------------
const b = (z, y) => z + y 

const tambah = (satu, dua, callBack) => {
    return callBack(satu, dua)
}

console. log ( 
tambah (3, 5, (a, b) => {
    return a + b
})
)


//  exercise
// Main Menu
// - Login Sebagai
// 1. Admin
// 2. User
// 3. Exit

// Admin
// 1. Admin
// 2. show
// 3. delete
// 4. edit
// 5. back

// User
// 1. add to cart 
// 2. show cart
// 3. check out
// 4. back