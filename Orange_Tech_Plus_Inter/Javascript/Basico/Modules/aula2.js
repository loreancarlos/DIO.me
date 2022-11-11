const { biggestNumber } = require('./functions');

let numbers = [];

for (let i = 0; i < 5; i++) {
   numbers[i] = Math.floor(Math.random() * 100 + 1);
}

const bigger = biggestNumber(numbers);

console.log(bigger);