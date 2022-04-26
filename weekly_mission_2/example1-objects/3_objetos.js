// Ejemplo 3: Objeto con diferentes propiedades.
const myObject3 = {
    name : "Maik" ,
    age  : 28,
    nicknames : [
        "Zqt",
        "Mike"
    ],
    address : {
        zip_code : "13100",
        street   : "Calle 13, Lote 11, Manzana 6",
        city     : "CDMX"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])
console.log(myObject3["address"].zip_code)