// Ejemplo 10: Overriding methods
class Explorer {
    constructor(name, username, mission) {
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername() {
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle) {
        super(name, username, mission) // SUPER nos ayuda a llamar al constructor padre
        this.cycle = cycle //Agregamos el atributo de la clase Viajero
    }

    getGeneralInfo() {
        let nameAndUserName = this.getNameAndUsername() // Llamamos al metodo de la clase padre
        // nameAndUsername es una variable de esta funcion, no necesitamos usar this para referenciarla
        return `${nameAndUserName}, Ciclo ${this.cycle}`
    }
}

const viajero1 = new Viajero("Carlo","LaunchX","Node JS","Abril 2022")
console.log("Ejemplo 10: Overriding Methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Metodo de la clase padre
console.log(viajero1.getGeneralInfo()) // Metodo de la clase hija