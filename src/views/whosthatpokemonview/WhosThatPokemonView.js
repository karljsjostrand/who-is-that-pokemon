import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../routes/RoutingPaths'
import PokeAPIService from '../../shared/api/service/PokeAPIService'
import WhosThatPokemonImage from '../../shared/resources/images/whos-that-pokemon.bmp'

export const WhosThatPokemonView = () => {
  const history = useHistory()
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const fetchPokemon = async (nameOrId) => {
      const { data } = await PokeAPIService.getPokemon(nameOrId)
      setPokemon(data)
    }
    fetchPokemon(randomPokemonId())
  }, [])

  const randomPokemonId = (min = 1, max = 99) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  return (
    <div>
      <button onClick={() => console.log(pokemon)}>log pokemon</button>
      {/* <h1>{pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}</h1> */}
      <div>
      <img src={WhosThatPokemonImage} alt={'whos that pokemon?'} onClick={() => history.push(RoutingPaths.pokemonView, { pokemon: pokemon })} />
      </div>
    </div>
  )
}
