// import { heroes } from "./data/heroes";
// const { heroes } = require("./data/heroes");
// import  heroes, { owners }from '../data/heroes'
import  heroes from '../data/heroes'

// console.log(owners)

export const getHeroeById = (id) => heroes.find(elm => elm.id === id )

// console.log(getHeroeById(2))


export const getHeroesByOwner = (owner) => heroes.filter(elm => elm.owner === owner)

// console.log(getHeroesByOwner('Marvel'))

