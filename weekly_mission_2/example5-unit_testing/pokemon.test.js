import Pokemon from "./pokemon";

test('1) Create a new object Pokemon', () => {
    const myPokemon = new Pokemon('Pikachu')
    expect(myPokemon.name).toBe('Pikachussssss'); //Corrige esta prueba
});
