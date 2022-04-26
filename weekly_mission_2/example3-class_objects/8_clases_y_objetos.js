// Ejemplo 8: Metodos static nos ayudan a escribir metodo en una clase que podemos usar sin necesidad
// de instanciar algun objeto
class Toolbox {
    static getMostUsefulTools() {
        return ["Command Line", "git", "Text Editor"]
    }
}

console.log("Ejemplo 8: Metodos static")
// Puedo llamar el metodo static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// Si intentamos instanciar un objeto, no podremos llamar este metodo static
//const toolbox = new Toolbox()
// console.log(toolbox.getMostUsefulTools()) // is not a function