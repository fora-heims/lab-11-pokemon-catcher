import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, getPokedex } from '../src/storage-utils.js';

let pokedex = getPokedex();

// Charts
let ctx = document.getElementById('final-appeared-chart').getContext('2d');
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

let snd = document.getElementById('final-caught-chart').getContext('2d');
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