import { PokeApi } from "./pokeApi.js";

export class PokeController {
   
   constructor(root) {
      this.root = document.querySelector(root);
   }
  
   index(offset, limit) {
      return PokeApi.list(offset, limit);
   }
  
   show(name) {
      return PokeApi.search(name);
   }
}