const fruits = require("./daftarArray");

// Soal 3
const stockBuah = fruits.reduce((acc, fruit) => {
  if (!acc[fruit.fruitType]) {
    acc[fruit.fruitType] = 0;
  }
  acc[fruit.fruitType] += fruit.stock;
  return acc;
}, {});

console.log(`Total Stock buah untuk masing-masing wadah adalah : `, stockBuah);

// Total Stock buah untuk masing-masing wadah adalah :  { IMPORT: 100, LOCAL: 260 }
