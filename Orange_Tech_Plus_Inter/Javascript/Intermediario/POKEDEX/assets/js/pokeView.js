import { PokeController } from './pokeController.js';

export class PokeView extends PokeController {
   constructor(root) {
      super(root);
      this.update({}, 20);
   }

   async update(offset, limit) {
      const listOfPokemons = await this.index(offset, limit);

      for (let i = 0; i < listOfPokemons.length; i++) {
         const pokemonData = await this.show(listOfPokemons[i].name);
         pokemonData.name = pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1);
         const card = document.createElement('li');
         card.classList = 'card';
         if (pokemonData.types[0].type.name === 'grass') {
            card.classList += ' green';
         } else if (pokemonData.types[0].type.name === 'fire') {
            card.classList += ' red';
         } else {
            card.classList += ' blue';
         }
         card.innerHTML = this.createCard(pokemonData);
         this.root.append(card);
      }
   }

   createCard(pokemon) {
      let types = '';
      pokemon.types.map(({ type }) => {
         type.name = type.name[0].toUpperCase() + type.name.substring(1);
         types += `<li>${type.name}</li>`
      });

      const id = (pokemon.id).toLocaleString('pt-BR', {
         minimumIntegerDigits: 5,
         useGrouping: false
      })

      return `
         <span class="poke-number">#${id}</span>
         <span class="poke-name">${pokemon.name}</span>
         <div class="poke-data">
            <ol class="poke-type">
               ${types}
            </ol>
            <div>
               <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
                  alt="${pokemon.name}">
            </div>
         </div>
      `;
   }
}
/* 
async function getDataApi() {

   listOfPokemons.map(async (pokemon) => {


      const pokemonData = await fetch(url)
         .then(data => data.json())
         .catch(error => console.log(error));

      
      const li = document.createElement('li');
      li.classList = 'card';
      li.innerHTML = createCard(pokemonData);
      li.style.backgroundColor =
         cards.append(li);
   });
} */