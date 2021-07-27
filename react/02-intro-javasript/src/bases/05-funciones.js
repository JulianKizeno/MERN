// const saludar = function(nombre){
//     return `Hola, ${nombre}`
// }

const saludar2 = (nombre) =>{
    return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`
const saludar4 = () => `Hola mundo`


// console.log(saludar('Harry'))

console.log(saludar2('Vegeta'))
console.log(saludar3('Goku'))
console.log(saludar4())

const getUser = () => ({
    uid: 'ABC123',
    username: 'el_papu_gomez'
})


const user = getUser()
console.log(user)

const getUsuarioActivo = (nombre) => ({
    uid: 'ABCD1234',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)