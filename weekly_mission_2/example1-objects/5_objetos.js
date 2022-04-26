// Ejemplo 5: Objeto con metodo que recibe parametros.
const myPet = {
    name : "Woopa",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con metodo que recibe parametros")
myPet.sayHelloToMyPet("Eva")