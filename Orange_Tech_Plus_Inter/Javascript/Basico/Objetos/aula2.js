class Car {
   brand;
   color;
   averageDistancePerLitre;

   constructor(brand, color, averageDistancePerLitre) {
      this.brand = brand;
      this.color = color;
      this.averageDistancePerLitre = averageDistancePerLitre;
   }

   averageCost(km, priceGas) {
      return (km / this.averageDistancePerLitre) * priceGas;
   }
}

const uno = new Car('Fiat', 'gray', 12);

const costTrip = (uno.averageCost(120, 5)).toFixed(2);
 
console.log(`O valor para ir até o local é R$ ${costTrip}. Contando com a volta custará R$ ${costTrip*2}.`)