import { pokemonArray } from '../src/pokemon.js';

export function findByPokemon(pokemonArray, pokemonValue) {
    for (let pokemon of pokemonArray){
        if (pokemonValue === pokemon.pokemon){
            return pokemon;
        }
    }
}

export function encounterPokemon(randomArray) {
    let pokedex = getPokedex();
    for (let each of randomArray) {
        let poke = pokedex[each];
        poke.appeared++;
    }
    return pokedex;
        // localStorage.setItem('POKEDEX', pokedex);
}

export function capturePokemon(pokemon) {
    let pokedex = getPokedex();
    findByPokemon(pokedex, pokemon);
    let pokedexString = JSON.stringify(pokedex);
    setPokedex('POKEDEX', pokedexString);
}

export function createInitialPokedex() {
    let pokeObject = pokemonArray.map(object => ({ 'pokemon': object.pokemon, appeared: 0, chosen: 0 }));
    localStorage.setItem('POKEDEX', JSON.stringify(pokeObject));
}

export function getPokedex() {
    let pokedexString = localStorage.getItem('POKEDEX');
    const pokedexObject = JSON.parse(pokedexString);
    return pokedexObject;
}

export function setPokedex() {
    let pokedex = getPokedex();
    // let appearOrChosenPoke = findByPokemon(pokemonValue, pokedex);
    // transform pokedex
    let pokedexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', pokedexString);
}