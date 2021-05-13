import PokeAPI from '../PokeAPI'

const getPokemon = async (name) => {
  return await PokeAPI.get(`pokemon/${name}/`)
}

const getRandomPokemon = async () => {
  
}

// const getPokemon = async (name) => {
//   // const data = await fetch(`${PokeAPI.POKEMON}${name}`)
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
//   // const data = response.json()
//   // console.log(data)
//   return
// }

export default {
  getPokemon,
}