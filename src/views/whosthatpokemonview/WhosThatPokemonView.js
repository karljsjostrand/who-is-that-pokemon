import './WhosThatPokemonView.css'
import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../routes/RoutingPaths'
import PokeAPIService from '../../shared/api/service/PokeAPIService'
import WhosThatPokemonImage from '../../shared/resources/images/whos-that-pokemon.bmp'

export const WhosThatPokemonView = () => {
  const history = useHistory()
  const [pokemon, setPokemon] = useState()
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const { data } = await PokeAPIService.getRandomPokemon()
      setPokemon(data)
    }

    fetchRandomPokemon()
  }, [])

  const revealPokemon = () => {
    history.push(RoutingPaths.pokemonView, { pokemon: pokemon , answer: answer})
  }

  return (
    <div className='whos-that-pokemon-container'>
      <div className='secret-pokemon'>
        <img className='who-is-it' src={WhosThatPokemonImage} alt={'whos that pokemon?'} onClick={() => revealPokemon()} />
        <img className='secret-pokemon' src={pokemon?.sprites?.back_default} alt='pokemon sprite' onClick={() => revealPokemon()} />
      </div>
      <div className='input-answer'>
        <form onSubmit={() => revealPokemon()}>
          <input className='input-answer' placeholder='WHO&apos;S THAT POKEMON?' onChange={(event) => setAnswer(event.target.value.toLowerCase())}></input>
        </form>
      </div>
    </div>
  )
}
