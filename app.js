// import functions and grab DOM elements
import { pokemonArray } from './src/pokemon.js';
import { encounterPokemon, capturePokemon } from './src/state-utils.js';
import { findByPokemon, createInitialPokedex, setPokedex, getPokedex } from './src/storage-utils.js';

const imgZero = document.getElementById('pkmn-img-r1');
const imgOne = document.getElementById('pkmn-img-r2');
const imgTwo = document.getElementById('pkmn-img-r3');
const catchButton = document.getElementById('catch-button');

// initialize global state
let x = 0;
let y = 0;
let z = 0;
let randomArray = [x, y, z];

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

    randomArray = [x, y, z];
    getPokedex();

    setPokedex();
}

// On Page Load:
generatePokemon();

// On Button Click
catchButton.addEventListener('click', () => {
    let checked = document.querySelectorAll('input[type=radio]:checked');
    if (checked.length === 1) {
        let chosen = pokemonArray[randomArray[checked[0].value]].pokemon;
        capturePokemon(chosen);
        generatePokemon();
        console.log(chosen);
        // let pokedex = getPokedex();
        // findByPokemon(pokedex, chosen);
        // let pokedexString = JSON.stringify(pokedex);
        // setPokedex('POKEDEX', pokedexString);
        
    }
});

