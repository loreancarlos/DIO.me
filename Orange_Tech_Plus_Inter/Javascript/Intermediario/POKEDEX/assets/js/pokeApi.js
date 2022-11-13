export class PokeApi {
   static list(offset = 20, limit = 10) {
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
      return fetch(url)
         .then(data => data.json())
         .then(({ results }) => results.map(pokemon => fetch(pokemon.url)
            .then(data => data.json())))
         .then(response => Promise.all(response))
         .catch(error => console.log(error));
   }

   static search(id) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      return fetch(url)
         .then(data => data.json())
         .catch(error => console.log(error));
   }
}