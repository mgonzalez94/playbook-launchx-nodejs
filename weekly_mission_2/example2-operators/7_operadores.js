// Ejemplo 7: Uso de filter para filtrar una lista de elementos.
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Bolivia', 'Nigeria']
const countriesContainingLand = countries7.filter( (country) =>
    country.includes('land')
)

console.log("Ejemplo 7: Uso de includes para filtrar una lista de elementos que contengan 'land'")
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter(( country ) => country.endsWith('ia'))

console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)