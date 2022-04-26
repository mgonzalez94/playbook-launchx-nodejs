/**
 * Este ejemplo incluye dependencias.
 * En tu linea de comando ve a este proyecto y ejecuta el comando
 * `npm install` para descargar las dependencias, esto creara una carpeta
 * node_modules
 */
export default class Pokemon {
    constructor(name, type, age) {
        this.name = name
        this.type = type
        this.age = age
        this.attacks = []
    }

    get getAttacks() {
        return this.attacks
    }

    set setAttacks(attacks) {
        return this.attacks = attacks
    }
}

const myPokemon = new Pokemon("Gengar","Ghost/Poison",1000)
console.log(myPokemon)