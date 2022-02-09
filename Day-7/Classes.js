// class Car {
//     constructor (year, brand, color) {
//         this.year = year
//         this.brand = brand
//         this.color = color
        // this.price = 0
//     }
// }

// const mobilBaru = new Car("2020", "Toyota", "White")
// const mobilLama = new Car("2000", "Ford", "Red")

// console. log(mobilBaru)
// console. log(mobilLama)

// const cars = [ 
//     {
//         year : "2020",
//         brand : "Toyota",
//         color : "White",
//     },
//     new Car("2000", "Ford", "Red")
// ];

// console. log(cars)


class Book {
    constructor (namaBuku, hargaBuku,) {
        this.namaBuku = namaBuku
        this.hargaBuku = hargaBuku
        this.jumlahBuku = 0
        this.produkTerbeli = 0 
    }

    calculateTotalPrice = () => {
        return this.hargaBuku * this.jumlahBuku
    }

    toString = () => {
        return `${this.namaBuku} --> Rp.  ${this.hargaBuku} x ${this.jumlahBuku} = ${this.hargaBuku * this.jumlahBuku}`  
    }
}

const bukuHP = new Book("Harry Potter", 7000)

console. log(bukuHP.toString())

console. log(bukuHP.calculateTotalPrice())


// const books = [
//     new Book("LOTR", 10000),
//     new Book("Harry Potter", 7000),
//     new Book("Sherlock", 12000),
//     new Book("Naruto", 15000),
// ]


class Product {
    constructor (productName, price) {
        this.productName = productName
        this.price = price
        this.qty = 0
    }

    calculateTotalPrice = () => {
        return this.price * this.qty
    }
}

class Book extends Product {
    constructor(productName, price, author, pages) {
        super(productName, price)
        this.author = author
        this.pages = pages
    }
}

console. log(new Book("Harry Potter", 10000, "J. K. Rowling,", 762))















// console. log(books[1].hargaBuku)
// console. log(books)




// const bukuSatu = new Book("LOTR", 10000)
// const bukuDua = new Book("Harry Potter", 7000)
// const bukuTiga = new Book("Sherlock", 12000)
// const bukuEmpat = new Book("Naruto", 15000)


// console. log(bukuSatu)
// console. log(bukuDua)
// console. log(bukuTiga)
// console. log(bukuEmpat)