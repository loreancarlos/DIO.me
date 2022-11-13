import { PokeApi } from "./pokeApi.js";

export class PokeController {


   constructor(root) {
      this.root = document.querySelector(root);
      this.offset = 0;
      this.limit = 10;
   }

   index() {
      return PokeApi.list(this.offset, this.limit);
   }

   show(id) {
      return PokeApi.search(id);
   }
}