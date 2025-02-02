//Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista.
/**
 * Arrow function and explicit return
 * const modifiedArray = arr.map((element, index) => element)
 */
const numbers4 = [1,2,3,4,5]
const numberSquare = numbers4.map( function(num) {
    return num * num
})

// Tambien se puede escribir como una "fat arrow"
// const numberSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de los elementos al cuadrado")
console.log(numberSquare)