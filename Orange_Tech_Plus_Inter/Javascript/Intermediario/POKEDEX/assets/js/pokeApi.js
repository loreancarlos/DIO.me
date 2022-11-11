export class PokeApi {
   static list(offset = 0, limit = 10) {
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
      return fetch(url).then(data => data.json()).then(({ results }) => results).catch(error => console.log(error));
   }

   static search(name) {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      return fetch(url).then(data => data.json()).catch(error => console.log(error));
   }
}