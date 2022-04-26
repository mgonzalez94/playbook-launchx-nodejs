// Ejemplo 10: Uso de every nos ayuda a validar todos los elementos de una lista,
// si todos cumplen con la validacion que indiques te regresa un true,
// de lo contrario sera false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every( (name) => typeof name === 'string')

console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)
