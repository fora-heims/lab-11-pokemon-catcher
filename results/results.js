// import functions and grab DOM elements
import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, getPokedex } from '../src/storage-utils.js';

const main = document.getElementById('main');
let results = getPokedex();

for (let stats of pokemonArray) {
    let poke = findByPokemon(results, stats.pokemon);
    let div = document.createElement('div');
    div.classList.add('results-divs');
    let title = document.createElement('h3');
    title.textContent = poke.pokemon;
    let img = document.createElement('img');
    img.src = stats.url_image;
    let appeared = document.createElement('span');
    appeared.textContent = `Appeared: ${poke.appeared}`;
    let chosen = document.createElement('span');
    chosen.textContent = `Caught: ${poke.chosen}`;
    let des = document.createElement('span');
    div.append(title, img, des, appeared, chosen);
    main.append(div);
}