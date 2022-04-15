class Pokemon {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!`)
    }

    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
}

module.exports = new Pokemon('MAIK-TRAINNER')
module.exports = Pokemon