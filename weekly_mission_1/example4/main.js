const Logger = require('./logger') //Invocamos el modulo de la clase.

//Creamos el objeto
const dbLogger = new Logger('DB') //Creamos un objeto nuevo, esto se llama constructor
//Invocamos el metodo
dbLogger.info('This is an informational message')

//Creamos otro objeto.
const accessLogger = new Logger('ACCESS')

accessLogger.verbose('This is a verbose message')