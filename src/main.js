import { filterByType } from "./dataFunctions.js";
// import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';
console.log("Esto es data: ", data);

const pokemonFiltered = filterByType(data.pokemon, "fire");
console.log({ pokemonFiltered });
