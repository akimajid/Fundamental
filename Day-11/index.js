// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dulplicateForEach = (arr, callback) => {
    for (i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

// dulplicateForEach(number, (val, idx, array) => {
//     console. log(val)
// })


// Goals
// 1. Duplikat method filter
// 2. Filter akan menghasilkan sebuah array -> pasti akan return array
// 3. Gimana cara menentukan item yang akan masuk ke array ?
//    callback function harus menghasilkan true
// 4. Gimana cara memasukkan item kedalam array ?
//    Gunakan metode push


const books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"]

const dulplicateFiter = (arr, callback) => {
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i])
    }

    return resultArr
}

let filteredData = books.filter((val) => {
    return val.length > 6
})

console.log(filteredData)