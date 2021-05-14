import PokeAPI from '../PokeAPI'

const getPokemon = (nameOrId) => {
  try {
    return PokeAPI.get(`pokemon/${nameOrId}/`)
  } catch (error) {
    console.log(error)
  }
}

const getAbility = (nameOrId) => {
  try {
    return PokeAPI.get(`ability/${nameOrId}/`)
  } catch (error) {
    console.log(error)
  }
}

// TODO count is a constant, 0 doesnt work, limits to 20 by default
const getAllPokemon = () => {
  const count = 1118
  return PokeAPI.get(`pokemon/?limit=${count}`)
}

export default {
  getAllPokemon,
  getAbility,
  getPokemon,
}