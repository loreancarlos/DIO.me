class Person {
   name;
   age;
   yearOfBirth;

   constructor(name, age) {
      this.name = name;
      this.age = age;
      this.yearOfBirth = 2022 - age;
   }
}

function ageCompare(p1, p2) {
   if (p1.age > p2.age) {
      return p1;
   } else if (p1.age == p2.age) {
      return false;
   }
   return p2;
}

const p1 = new Person('Lorean', 27);
const p2 = new Person('Emmanuelle', 29);

const p = ageCompare(p1, p2);

p ? console.log(`${p.name} é o(a) mais velho(a) porque nasceu em ${p.yearOfBirth}.`) : console.log('Eles tem a mesma idade');