const product = {
  productName: "LOTR",
  price: 10000,
  quantity: 0,
};

const newProduct = {
  ...product,
};

const {productName: hargaProduk, quantity, price} = product

console.log(product);
