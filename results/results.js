// import functions and grab DOM elements
import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, getPokedex } from '../src/storage-utils.js';

const main = document.getElementById('main');
let pokedex = getPokedex();

for (let stats of pokemonArray) {
    let poke = findByPokemon(pokedex, stats.pokemon);
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

// Charts
let ctx = document.getElementById('appeared-chart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokedex.map(x => x.pokemon),
        datasets: [{
            label: 'Appeared',
            data: pokedex.map(x => x.appeared),
            backgroundColor: pokemonArray.map(x => x.color_1),
            borderColor: pokemonArray.map(x => x.color_2),
            borderWidth: 2.5
        }]
    },
    options: {
        scales: {
            y: {
                integer: true,
                beginAtZero: true
            }
        }
    }
});

let snd = document.getElementById('caught-chart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(snd, {
    type: 'bar',
    data: {
        labels: pokedex.map(x => x.pokemon),
        datasets: [{
            label: 'Caught',
            data: pokedex.map(x => x.chosen),
            backgroundColor: pokemonArray.map(x => x.color_1),
            borderColor: pokemonArray.map(x => x.color_2),
            borderWidth: 2.5
        }]
    },
    options: {
        scales: {
            y: {
                integer: true,
                beginAtZero: true
            }
        }
    }
});