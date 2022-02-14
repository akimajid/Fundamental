// Duplicate indexOf

const fruits = ["Apel", "Jeruk", "Leci", "Mangga"]

console. log(fruits.indexOf("Leci"))


const duplicateIndexOf = (arr, dataToFind) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == dataToFind) {
            return i
        }
    }

    return -1
}

// Duplicate findOf

// fruits.find((val, idx, arr) => {
//     return val == "Jeruk"
// })

const duplicateFind = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i]
        }
    }
}

console. log(duplicateFind(fruits, (arr, val, idx) => {
    return val.length > 4
}))


