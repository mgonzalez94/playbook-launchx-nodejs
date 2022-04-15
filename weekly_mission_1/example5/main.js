const Logger = require('./logger')

//Ya usamos directamente el objeto.
Logger.log('This is an informational message')

/**
 * Tambien podemos instanciar uno nuevo de esta forma.
 * 
 * const customLogger = new logger.constructor('CUSTOM')
 * customLogger.log('This is an informational message')
 */