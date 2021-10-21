import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, getPokedex } from './storage-utils.js';



export function encounterPokemon(pokeIndex) {
    let pokedex = getPokedex();
    let poke = findByPokemon(pokeIndex, pokedex);
    poke.appeared++;
    localStorage.setItem('POKEDEX', pokedex);
}


export function capturePokemon(pokemon) {
    return pokemon;
}