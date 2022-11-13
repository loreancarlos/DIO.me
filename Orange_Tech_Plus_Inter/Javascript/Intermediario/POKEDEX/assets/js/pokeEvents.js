import { PokeView } from "./pokeView.js";

export class PokeEvent extends PokeView {

   constructor(root) {
      super(root);
   }

   add() {
      const buttonOffset = document.querySelector('#button-offset');
      const cardsWrapper = document.querySelector('#cards-wrapper');
      const cards = document.querySelectorAll('li[class*="card"]');

      buttonOffset.onclick = event => {
         this.offset += this.limit;
         this.update();
      }


      cards.forEach(card => {
         card.onclick = event => {
            this.offset = 0;
            this.clear(buttonOffset);
            this.detailCard(card);
         }
      });
   }

   back() {
      const backButton = document.querySelector('.backButton');
      const buttonOffset = document.querySelector('#button-offset');

      backButton.onclick = event => {
         this.clear(buttonOffset);
         this.root.classList = 'cards-wrapper';
         this.update();
      };
   }
}