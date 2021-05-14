import PokeAPI from '../PokeAPI'

const getPokemon = async (name) => {
  return await PokeAPI.get(`pokemon/${name}/`)
}

const getRandomPokemon = async () => {
  return getPokemon(
    randomPokemonId()
  )
}

const randomPokemonId = (min = 1, max = 99) => {
  return Math.round(Math.random() * (max - min) + min)
}

export default {
  getPokemon,
  getRandomPokemon,
}