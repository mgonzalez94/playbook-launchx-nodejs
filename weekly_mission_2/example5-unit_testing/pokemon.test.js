import Pokemon from "./pokemon";

test('1) Create a new object Pokemon', () => {
    const myPokemon = new Pokemon('Gengar')
    expect(myPokemon.name).toBe('Gengar'); //Corrige esta prueba
});
