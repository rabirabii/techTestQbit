const fruits = require("./daftarArray");

// Soal 2
const TipeBuah = fruits.reduce((acc, fruit) => {
  if (!acc[fruit.fruitType]) {
    acc[fruit.fruitType] = [];
  }
  acc[fruit.fruitType].push(fruit.fruitName);
  return acc;
}, {});

const JumlahWadah = Object.keys(TipeBuah).length;

console.log(`Andi membutuhkan ${JumlahWadah} wadah`);

for (const fruitType in TipeBuah) {
  console.log(`Wadah untuk ${fruitType} : ${TipeBuah[fruitType]}`);
}

// Output Andi membutuhkan 2 wadah
// Wadah untuk IMPORT : Apel,Kurma,apel,KURMA
// Wadah untuk LOCAL : Manggis,Jeruk Bali,Salak
