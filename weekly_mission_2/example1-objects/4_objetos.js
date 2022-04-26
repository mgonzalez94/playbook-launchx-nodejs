// Ejemplo 4: Objeto con metodos
const pet = {
    name : "Eva",
    // Esta es una funcion que se guarda como propiedad
    sayHello : function() {
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en espaniol!`)
    }
}

console.log("Ejemplo 4: Objeto con metodos")
pet.sayHello()