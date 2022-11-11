function sayMayName(name) {
   console.log(`Hello, ${name}.`);
}

sayMayName('Lorean');
sayMayName('Emmanuelle');

function isAdult(age) {
   let adult;
   age >= 18 ? adult = true : adult = false;
   return adult;
}

const age = 18;

isAdult(age) ? console.log(`Você já é um adulto.`) : console.log(`Você é uma criança ainda.`);
