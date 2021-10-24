// import functions and grab DOM elements
import { pokemonArray } from './src/pokemon.js';
import { createInitialPokedex, encounterPokemon, capturePokemon, findByPokemon, getPokedex } from './src/storage-utils.js';

const imgZero = document.getElementById('pkmn-img-r1');
const imgOne = document.getElementById('pkmn-img-r2');
const imgTwo = document.getElementById('pkmn-img-r3');
const sZero = document.getElementById('pkmn-s1');
const sOne = document.getElementById('pkmn-s2');
const sTwo = document.getElementById('pkmn-s3');
const ssZero = document.getElementById('pkmn-ss1');
const ssOne = document.getElementById('pkmn-ss2');
const ssTwo = document.getElementById('pkmn-ss3');
const catchButton = document.getElementById('catch-button');

// initialize global state
let x = 0;
let y = 0;
let z = 0;
let a = 0;
let b = 0;
let c = 0;
let randomArray = [x, y, z];
let pokemonCaptured = 0;
createInitialPokedex();

function generateIndexes() {
    x = Math.floor(Math.random() * pokemonArray.length);
    y = Math.floor(Math.random() * pokemonArray.length);
    z = Math.floor(Math.random() * pokemonArray.length);
}

function generatePokemon() {
    generateIndexes();
    while (x === y || x === z || y === z || a === x || a === y || a === z || b === x || b === y || b === z || c === x || c === y || c === z) {
        generateIndexes();
    }
    a = x;
    b = y;
    c = z;

    let pokedex = getPokedex();
    let xDex = findByPokemon(pokedex, pokemonArray[x].pokemon);
    let yDex = findByPokemon(pokedex, pokemonArray[y].pokemon);
    let zDex = findByPokemon(pokedex, pokemonArray[z].pokemon);

    imgZero.src = pokemonArray[x].url_image;
    imgOne.src = pokemonArray[y].url_image;
    imgTwo.src = pokemonArray[z].url_image;

    sZero.textContent = `Appeared: ${xDex.appeared}`;
    sOne.textContent = `Appeared: ${yDex.appeared}`;
    sTwo.textContent = `Appeared: ${zDex.appeared}`;
    
    ssZero.textContent = `Caught: ${xDex.chosen}`;
    ssOne.textContent = `Caught: ${yDex.chosen}`;
    ssTwo.textContent = `Caught: ${zDex.chosen}`;

    randomArray = [x, y, z];
    encounterPokemon(randomArray);
}

// On Page Load:
generatePokemon();

// On Button Click
catchButton.addEventListener('click', () => {
    let checked = document.querySelectorAll('input[type=radio]:checked');
    if (checked.length === 1) {
        if (pokemonCaptured < 10) {
            pokemonCaptured++;
            let chosen = pokemonArray[randomArray[checked[0].value]].pokemon;
            capturePokemon(chosen);
            generatePokemon();
        } else {
            window.location.replace('./results');
        }
    }
});

