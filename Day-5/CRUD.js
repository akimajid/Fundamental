// } else if (userMenuInput == "3") {
//     let productsList = "";

//     for (let i = 0; i < products.length; i++) {
//       productsList += [i + 1] + ". " + products[i] + "--> Harga: Rp." + ItemsPrice[i].toLocaleString() + "\n";


let fruit =  ["Leci", "Apel", "Jeruk", "Mangga"]
let foodPrice = [7000, 5000, 3000, 10000]


function displayData (itemName, itemsPrice) {
    for (let i = 0; i < itemName.length; i++) {
        console. log(`${i + 1}. ${itemName[i]} || Rp. ${itemsPrice[i].tolocalestring()}`)
    }
}

displayData(fruit, foodPrice)