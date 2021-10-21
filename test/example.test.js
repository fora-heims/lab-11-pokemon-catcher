// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { pokemonArray } from '../src/pokemon.js';
import { findByPokemon, createInitialPokedex, setPokedex, getPokedex, encounterPokemon, capturePokemon } from '../src/storage-utils.js';

const test = QUnit.test;
const skip = QUnit.skip;

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

test('encounterPokemon increments the appeared pokemon', (expect) => {

    const expected = [
        { pokemon: 'bulbasaur', appeared: 0, chosen: 0 },
        { pokemon: 'ivysaur', appeared: 0, chosen: 0 },
        { pokemon: 'charmander', appeared: 1, chosen: 0 },
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
    
    const actualString = localStorage.getItem('POKEDEX');
    const actual = JSON.parse(actualString);
    // or = getPokedex();
    console.log(encounterPokemon('charmander'));
    
    encounterPokemon('charmander');
    expect.deepEqual(actual, expected);
});

skip('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

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

skip('createInitialPokedex should create a pokedex with appeared and encountered values set to zero', (expect) => {
    const expected = true;
    const actual = createInitialPokedex();
    expect.equal(actual, expected);
});

skip('setPokedex should set the localStorage value associated with the "POKEDEX" key', (expect) => {
    const expected = true;
    const actual = setPokedex();
    expect.equal(actual, expected);
});

skip('capturePokemon should increment the value of captured of the pokemon', (expect) => {
    const expected = true;
    const actual = capturePokemon();
    expect.equal(actual, expected);
});