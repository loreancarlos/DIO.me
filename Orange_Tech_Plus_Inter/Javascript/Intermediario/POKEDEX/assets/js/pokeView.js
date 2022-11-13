import { PokeController } from './pokeController.js';

export class PokeView extends PokeController {
   constructor(root) {
      super(root);
      this.update();
   }

   async update() {
      const listOfPokemons = await this.index();
      listOfPokemons.forEach(pokemon => {
         const card = document.createElement('li');
         card.classList = 'card ' + pokemon.types[0].type.name;
         card.innerHTML = this.createCardOfPokemons(pokemon);
         this.root.append(card);
      });
      this.add();
   }

   clear(buttonOffset) {
      buttonOffset.toggleAttribute('hidden');
      this.root.innerHTML = '';
   }

   createListTypes(pokemonTypes) {
      return pokemonTypes.map(({ type }) => {
         return `<li>${type.name}</li>`;
      });
   }

   createCardOfPokemons(pokemon) {
      return `
         <span class="poke-number">#${pokemon.id}</span>
         <span class="poke-name">${pokemon.name}</span>
         <div class="poke-data">
            <ol class="poke-type">
               ${this.createListTypes(pokemon.types).join('')}
            </ol>
            <div>
               <img
                  src="${pokemon.sprites.other.dream_world.front_default}"
                  alt="${pokemon.name}">
            </div>
         </div>
      `;
   }

   async detailCard(card) {
      this.root.classList = 'detailCard-wrapper';

      const pokemon = await this.show(card.firstElementChild.innerText.substring(1));
      this.createCardOfPokemons(pokemon);
      const detailCard = document.createElement('li');
      detailCard.classList = 'detailCard ' + pokemon.types[0].type.name;
      detailCard.innerHTML = this.createDetailCard(pokemon);
      this.root.append(detailCard);
      this.back();
   }

   createDetailCard(pokemon) {
      return `
               <div class='menu-wrapper'>
                  <button class='backButton'>
                     <img
                     src="./assets/media/botao-voltar.png"
                     alt="Voltar">
                  </button>
                  <button class='star'>
                     <img
                     src="./assets/media/estrela.png"
                     alt="Voltar">
                  </button>
               </div>
               <div class='headInfo'>
                  <div>
                     <span>${pokemon.name}</span>
                     <ul>
                        ${this.createListTypes(pokemon.types).join('')}
                     </ul>
                  </div>
                  <span>#${pokemon.id}</span>
               </div>
               <div class='image-wrapper'>
                  <img
                  src="${pokemon.sprites.other.dream_world.front_default}"
                  alt="${pokemon.name}">
               </div>
               <div class='footerInfo'>
                  <fieldset>
                     <legend>About</legend>
                     <div class='about'>
                        <div class='stats'>
                           <span>HP</span>
                           <span>Attack</span>
                           <span>Defense</span>
                           <span>Speed</span>
                        </div>
                        <div class='stats'>
                           <span>${pokemon.stats[0].base_stat}</span>
                           <span>${pokemon.stats[1].base_stat}</span>
                           <span>${pokemon.stats[2].base_stat}</span>
                           <span>${pokemon.stats[5].base_stat}</span>
                        </div>
                     </div>
                  </fieldset>
                  <fieldset>
                     <legend>Breeding</legend>
                     <div class='about'>
                        <div class='stats'>
                           <span>Gender</span>
                           <span>Egg Groups</span>
                           <span>Egg Cycle</span>
                        </div>
                        <div class='stats'>
                           <span>Gender 1</span>
                           <span>Egg Groups</span>
                           <span>Egg Cycle</span>
                        </div>
                     </div>
                  </fieldset>
               </div>
            </li>
   `;
   }
}