const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 12312312,
        lat: 14.33232,
        lng: 2131.332
    }
}

// operador spread 
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);