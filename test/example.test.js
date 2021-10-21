// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, createInitialPokedex, getPokedex, encounterPokemon, capturePokemon } from '../src/storage-utils.js';

const test = QUnit.test;
const skip = QUnit.skip;

// Passing
test('getPokedex returns the key "POKEDEX" from localStorage', (expect) => {

    const pokedex = [
        { pokemon: 'bulbasaur', appeared: 0, chosen: 0 },
        { pokemon: 'ivysaur', appeared: 0, chosen: 0 },
        { pokemon: 'charmander', appeared: 0, chosen: 0 },
        { pokemon: 'charmeleon', appeared: 0, chosen: 0 },
        { pokemon: 'charizard', appeared: 0, chosen: 0 },
        { pokemon: 'squirtle', appeared: 0, chosen: 0 },
        { pokemon: 'wartortle', appeared: 0, chosen: 0 },
        { pokemon: 'blastoise', appeared: 0, chosen: 0 },
        { pokemon: 'caterpie', appeared: 0, chosen: 0 },
        { pokemon: 'metapod', appeared: 0, chosen: 0 },
        { pokemon: 'beedrill', appeared: 0, chosen: 0 },
        { pokemon: 'weedle', appeared: 0, chosen: 0 },
        { pokemon: 'kakuna', appeared: 0, chosen: 0 },
        { pokemon: 'pidgey', appeared: 0, chosen: 0 },
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
    
    const actual = getPokedex();
    expect.deepEqual(actual, pokedex);
});

// Passing
test('findByPokemon should return the pokemon object from an array with a pokemon key', (expect) => {
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd19',
        'pokemon':'ivysaur',
        'id':2,
        'species_id':2,
        'height':10,
        'weight':130,
        'base_experience':142,
        'type_1':'grass',
        'type_2':'poison',
        'attack':62,
        'defense':63,
        'hp':60,
        'special_attack':80,
        'special_defense':80,
        'speed':60,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        'generation_id':1,
        'evolves_from_species_id':'1',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'ivysaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/ivysaur'
    };
    const actual = findByPokemon(pokemonArray, 'ivysaur');
    expect.deepEqual(actual, expected);
});

// Passing
test('createInitialPokedex should create a pokedex with appeared and encountered values set to zero', (expect) => {
    localStorage.removeItem('POKEDEX');
    const expected = [
        { pokemon: 'bulbasaur', appeared: 0, chosen: 0 },
        { pokemon: 'ivysaur', appeared: 0, chosen: 0 },
        { pokemon: 'charmander', appeared: 0, chosen: 0 },
        { pokemon: 'charmeleon', appeared: 0, chosen: 0 },
        { pokemon: 'charizard', appeared: 0, chosen: 0 },
        { pokemon: 'squirtle', appeared: 0, chosen: 0 },
        { pokemon: 'wartortle', appeared: 0, chosen: 0 },
        { pokemon: 'blastoise', appeared: 0, chosen: 0 },
        { pokemon: 'caterpie', appeared: 0, chosen: 0 },
        { pokemon: 'metapod', appeared: 0, chosen: 0 },
        { pokemon: 'beedrill', appeared: 0, chosen: 0 },
        { pokemon: 'weedle', appeared: 0, chosen: 0 },
        { pokemon: 'kakuna', appeared: 0, chosen: 0 },
        { pokemon: 'pidgey', appeared: 0, chosen: 0 },
    ];
    createInitialPokedex();
    const actual = getPokedex();
    expect.deepEqual(actual, expected);
});

test('encounterPokemon increments the appeared pokemon', (expect) => {
    localStorage.removeItem('POKEDEX');
    createInitialPokedex();
    const expected = [
        { pokemon: 'bulbasaur', appeared: 0, chosen: 0 },
        { pokemon: 'ivysaur', appeared: 0, chosen: 0 },
        { pokemon: 'charmander', appeared: 1, chosen: 0 },
        { pokemon: 'charmeleon', appeared: 0, chosen: 0 },
        { pokemon: 'charizard', appeared: 0, chosen: 0 },
        { pokemon: 'squirtle', appeared: 1, chosen: 0 },
        { pokemon: 'wartortle', appeared: 0, chosen: 0 },
        { pokemon: 'blastoise', appeared: 0, chosen: 0 },
        { pokemon: 'caterpie', appeared: 1, chosen: 0 },
        { pokemon: 'metapod', appeared: 0, chosen: 0 },
        { pokemon: 'beedrill', appeared: 0, chosen: 0 },
        { pokemon: 'weedle', appeared: 0, chosen: 0 },
        { pokemon: 'kakuna', appeared: 0, chosen: 0 },
        { pokemon: 'pidgey', appeared: 0, chosen: 0 },
    ];
    
    encounterPokemon([2, 5, 8]);

    let actual = getPokedex();

    expect.deepEqual(actual, expected);
});

test('capturePokemon should increment the value of captured of the pokemon', (expect) => {
    localStorage.removeItem('POKEDEX');
    createInitialPokedex();
    const expected = [
        { pokemon: 'bulbasaur', appeared: 0, chosen: 0 },
        { pokemon: 'ivysaur', appeared: 0, chosen: 0 },
        { pokemon: 'charmander', appeared: 0, chosen: 1 },
        { pokemon: 'charmeleon', appeared: 0, chosen: 0 },
        { pokemon: 'charizard', appeared: 0, chosen: 0 },
        { pokemon: 'squirtle', appeared: 0, chosen: 0 },
        { pokemon: 'wartortle', appeared: 0, chosen: 0 },
        { pokemon: 'blastoise', appeared: 0, chosen: 0 },
        { pokemon: 'caterpie', appeared: 0, chosen: 0 },
        { pokemon: 'metapod', appeared: 0, chosen: 0 },
        { pokemon: 'beedrill', appeared: 0, chosen: 0 },
        { pokemon: 'weedle', appeared: 0, chosen: 0 },
        { pokemon: 'kakuna', appeared: 0, chosen: 0 },
        { pokemon: 'pidgey', appeared: 0, chosen: 0 },
    ];
    
    capturePokemon('charmander');

    let actual = getPokedex();

    expect.deepEqual(actual, expected);
});