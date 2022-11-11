function gets() {
   return 10;
}

function print(text) {
   console.log(text);
}

function biggestNumber(numbers) {
   let bigger = 0;
   numbers.forEach(number => {
      number > bigger ? bigger = number : '';
   });
   return bigger;
}

module.exports = { gets, print, biggestNumber };