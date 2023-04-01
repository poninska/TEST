const products = [
  {
    name: "banan",
    price: 4.99,
  },
  {
    name: "chleb",
    price: 3.25,
  },
  {
    name: "ser",
    price: 7.0,
  },
  {
    name: "baton",
    price: 1.99,
  },
];
//Za pomocą JS oblicz średnią cenę produktu oraz jego sumę produktow w koszyku.

const result =
  products[0].price + products[1].price + products[2].price + products[3].price;

console.log(result);
console.log("suma produktów to:" + result);

const average = result / products.length;
console.log("średnia:" + average);
