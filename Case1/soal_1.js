const fruits = require("./daftarArray");

// Soal 1. Buah Apa saja yang dimiliki Andi?
const buahAndi = fruits.map((fruit) => fruit.fruitName);
console.log("Buah yang dimiliki Andi , yaitu :", buahAndi);

// Output Buah yang dimiliki Andi , yaitu : [ 'Apel', 'Kurma', 'apel', 'Manggis', 'Jeruk Bali', 'KURMA', 'Salak' ]
