const ethanolPrice = 5.79;
const gasPrice = 6.66;
const distance = 100;
const averageDistancePerLitre = 12;
const typeFuel = 'Ethanol';

const liters = distance / averageDistancePerLitre;

let total;
typeFuel === 'Ethanol' ? total = liters * ethanolPrice : total = liters * gasPrice;

console.log(`O gasto total da viagem será de R$${total.toFixed(2)}. Com o preço de volta dá ${total.toFixed(2) * 2}.`);
