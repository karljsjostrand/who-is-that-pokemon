import Axios from 'axios'

const PokeAPI = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export default PokeAPI