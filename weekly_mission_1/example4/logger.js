class Logger {

    constructor(name) {
        // `this` es una variable para referenciar el valor del contexto local de esta clase.
        this.name = name
    }
    /**
     * `this.name` es la variable que se guarda en el contexto local.
     * message, es una variable que se le pasa al ejecutar este metodo
     * @param {*} message 
     */
    info(message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }
    /**
     * 
     * @param {*} message 
     */
    verbose(message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

//Esta clase se exporta en este modulo.
module.exports = Logger