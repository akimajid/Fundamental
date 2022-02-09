// const buku = {
//   title: "Harry Potter",
//   author: {
//     name: "J. K. Rowling",
//     age: 50,
//     natonality: "Inggris",
//   },
//   pages: 658,
//   released: "2001",
//   alternateTitle: ["Sang Penyihir", "The Wizard"],
//   sequels: [
//     {
//       title: "Harry Potter 2",
//       yearReleased: "2003",
//     },
//     {
//       title: "Harry Potter 3",
//       yearReleased: "2005",
//     },
//     {
//       title: "Harry Potter 4",
//       yearReleased: "2007",
//     },
//   ],
// };

// Hapus property
// delete buku.title

// console.log(buku);

// Objects destructuring
// let {yearReleased, title, pages} = buku;
// console.log(yearReleased)
// console. log(title)
// console.log(pages)

// console. log(buku, title)


// --------------------------------------------------------------------------------------------------
// const buah = [
//   {
//     namaBuah: "Leci",
//     hargaBuah: 7000,
//   },
//   {
//     namaBuah: "Apel",
//     hargaBuah: 5000,
//   },
//   {
//     namaBuah: "Jeruk",
//     hargaBuah: 3000,
//   },
//   {
//     namaBuah: "Mangga",
//     hargaBuah: 10000,
//   },
// ];

// for (let i = 0; i < buah.length; i++) {
//     console. log (`${i + 1}. Nama: ${buah[i].namaBuah} || Harga: Rp. ${buah[i].hargaBuah.toLocaleString()}`)
// }

// // console. log(buah)

// ---------------------------------------------------------------------------------------------------------
const mobil = [
    {
        brand = "Toyota",
        tahun = "2010",
        warna = ["Merah", "Hitam"]
    }, 
    {
        brand = "Honda",
        tahun = "2007",
        warna = ["Abu abu", "Hitam", "Putih"],
    },
]
for (let i = 0; i < mobil.length; i++) {
    let car = mobil[i]
    let row = `Brand: ${car.brand[i]} || Tahun: ${car.tahun[i]} || Warna: `

    for (let j = 0; j < mobil[i].warna.length; j++) {
        row += `${car.warna[j]}`
    }
}


console. log(row)



// result = ""
// for (let i = 0; i < mobil.length; i++) {
//     result += (`Brand: ${mobil[i].brand} || Tahun: ${mobil[i].tahun} || Warna: ${mobil[i].warna}`)
// } for (let j = 0; j < mobil[i].warna[i].length; j++) {
//     result += "\n"
// }


// console. log(`${i + 1}. Brand: ${mobil.brand} || Tahun: ${mobil.tahun} || Warna: ${mobil.warna}`)


// const products = [
//     {
//         namaBuku : "LOTR",
//         hargaBuku : 10000,
//         jumlahBuku : 0
//     }, 
//     {
//         namaBuku : "Harry Potter",
//         hargaBuku : 7000,
//         jumlahBuku : 0
//     }, 
//     {
//         namaBuku : "Sherlock",
//         hargaBuku : 12000,
//         jumlahBuku : 0
//     }, 
//     {
//         namaBuku : "Naruto",
//         hargaBuku : 15000,
//         jumlahBuku : 0
//     }
// ]