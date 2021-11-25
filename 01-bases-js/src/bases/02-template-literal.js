const nombre = 'Jhon'
const apellido = 'Contreras'

const nombreCompleto = nombre + ' ' + apellido; 
const nombreCompletoTemplateString = `${nombre} ${apellido}`

console.log(nombreCompleto);
console.log(nombreCompletoTemplateString);
console.log(`Resultado: ${1 + 1}`);


const getSaludo = (nombre) =>{
    return 'Hola' + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);