
// function saludar(n){
//     return `Hola ${n}`
// }


// const saludar = function(n){
//     return `Hola ${n}`
// }

const saludar = (n) => `Hola ${n}`

const nombre = 'Tony'
console.log(saludar(nombre));


const getUser = () => ({uId: '1234A', username: 'Tony'})

console.log(getUser());


const heroes = [{
        id: 1,
        name: 'batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

// Array.some 
// const existe = heroes.some( ( heroe ) => heroe.id === 1 ) // retorna true si encuentra el id

// Array find 
const existe = heroes.find( ( heroe ) => heroe.id === 1 ) //retorna el item del array si lo encuentra 



console.log(existe);