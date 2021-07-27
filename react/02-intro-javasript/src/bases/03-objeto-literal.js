
const persona = {
    nombre: 'Julian',
    apellido: 'Quiceno',
    edad: 30,
    direccion: {
        ciudad: 'Madrid',
        zip: 28190,
        lat: 14.3232,
        lng: 34.929394
    }
}

//console.table(persona)

const persona2 = {...persona}
persona2.nombre = 'John'

console.log(persona)
console.log(persona2)