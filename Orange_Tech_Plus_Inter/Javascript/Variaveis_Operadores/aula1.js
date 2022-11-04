const ethanolPrice = 5.79;
const distance = 50;
const averageDistancePerLitre = 12;

const total = (distance / averageDistancePerLitre) * gasPrice;
console.log(`O gasto total da viagem será de R$${total.toFixed(2)}. Com o preço de volta dá ${total.toFixed(2) * 2}.`);
