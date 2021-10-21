// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { encounterPokemon } from '../src/state-utils.js';
import { getPokedex } from '../src/storage-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
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

test('time to test a function', (expect) => {

    const expected = true;
    
    const actual = true;

    expect.equal(actual, expected);
});

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

test('encounterPokemon increments the appeared pokemon ', (expect) => {

    encounterPokemon('charmander');
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
    
    const actual = localStorage.getItem('POKEDEX');
    // or = getPokedex();

    expect.deepEqual(actual, expected);
});