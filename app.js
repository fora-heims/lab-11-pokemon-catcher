// import functions and grab DOM elements
import { pokemonArray } from './src/pokemon.js';
import { encounterPokemon, capturePokemon } from './src/state-utils.js';
import { findByPokemon, setPokedex, getPokedex } from './src/storage-utils.js';

const radioZero = document.getElementById('pkmn-r1');
const radioOne = document.getElementById('pkmn-r2');
const radioTwo = document.getElementById('pkmn-r3');
const imgZero = document.getElementById('pkmn-img-r1');
const imgOne = document.getElementById('pkmn-img-r2');
const imgTwo = document.getElementById('pkmn-img-r3');
const catchButton = document.getElementById('catch-button');

// initialize global state
let x = 0;
let y = 0;
let z = 0;

function generateIndexes() {
    x = Math.floor(Math.random() * pokemonArray.length);
    y = Math.floor(Math.random() * pokemonArray.length);
    z = Math.floor(Math.random() * pokemonArray.length);
}

function generatePokemon() {
    generateIndexes();
    while (x === y || x === z || y === z) {
        generateIndexes();
    }
    imgZero.src = pokemonArray[x].url_image;
    imgOne.src = pokemonArray[y].url_image;
    imgTwo.src = pokemonArray[z].url_image;

    getPokedex();

    setPokedex();
}

// On Page Load:
generatePokemon();

// On Button Click
catchButton.addEventListener('click', () => {
    getPokedex();

    setPokedex('obj');
    generatePokemon();
    console.log([x, y, z]);
});

