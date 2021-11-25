const arreglo = [1,2,3,4]
arreglo.push(5)

// operador spread 
const arreglo2 = [...arreglo]
arreglo2.push(6)

const arreglo3 = arreglo2.map( function(n){
    return n * 2 //imprime por consola (6) [2, 4, 6, 8, 10, 12]
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);