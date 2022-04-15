const Pokemon = require('./pokemon')

const pikachu = new Pokemon("Pikachu")
const bulbasaur = new Pokemon("Bulbasaur")
const squirtle = new Pokemon("Squirtle")
const charmander = new Pokemon("Charmander")

pikachu.sayHello()
pikachu.sayMessage("Pika!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Sor!!")

squirtle.sayHello()
squirtle.sayMessage("Vamo a calmarno!")

charmander.sayHello()
charmander.sayMessage("Charr!!")