// import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, getPokedex, setPokedex } from './storage-utils.js';



export function encounterPokemon(randomArray) {
    let pokedex = getPokedex();
    for (let encountered of randomArray) {
        let poke = findByPokemon(pokedex, encountered);
        poke.appeared++;
        return pokedex;
        // localStorage.setItem('POKEDEX', pokedex);
    }
}


export function capturePokemon(pokemon) {
    let pokedex = getPokedex();
    findByPokemon(pokedex, pokemon);
    let pokedexString = JSON.stringify(pokedex);
    setPokedex('POKEDEX', pokedexString);
}