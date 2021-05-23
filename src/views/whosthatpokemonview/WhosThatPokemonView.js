import './WhosThatPokemonView.css'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../routes/RoutingPaths'
import PokeAPIService from '../../shared/api/service/PokeAPIService'
import { PokemonContext } from './../../shared/provider/PokemonProvider'
import { ScoreBoard } from '../../components/scoreboard/ScoreBoard'

import WhosThatPokemonImg from '../../shared/resources/images/whos-that-pokemon.bmp'
import PokeballImg from '../../shared/resources/images/pokeball.png'

export const WhosThatPokemonView = () => {
  const history = useHistory()
  const [pokemon, setPokemon] = useContext(PokemonContext)
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Returns a random integer between 0 and max.
  const getRandom = (max) => {
    const min = 0
    return Math.round(Math.random() * (max - min) + min)
  }

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const response = await PokeAPIService.getAllPokemon()
  
      const max = response.data.count
      const rnd = getRandom(max)
  
      const randomPokemonName = response.data.results[rnd].name
      console.log(randomPokemonName)
  
      const { data } = await PokeAPIService.getPokemon(randomPokemonName)
      setPokemon(data)
      setIsLoading(false)
    }

    fetchRandomPokemon()
  }, [setPokemon])

  // Navigates to PokemonView with answer.
  const revealPokemon = () => {
    history.push(RoutingPaths.pokemonView, { answer: answer })
  }

  return (
    <div className='whos-that-pokemon-container'>
      {/* TODO countdown timer before skip answer and view pokemon? */}
      <div className='secret-pokemon'>
        <img 
          className='who-is-it' 
          src={WhosThatPokemonImg} 
          alt='whos that pokemon?' 
          onClick={() => revealPokemon()} />
        {/* While pokemon is being fetched src spinner, otherwise src back facing sprite, if back is missing src front. */}
        <img 
          className={isLoading ? 'secret-pokemon loading' : 'secret-pokemon'}
          src={isLoading ? 
             PokeballImg : pokemon?.sprites?.back_default ? 
                           pokemon?.sprites?.back_default : pokemon?.sprites?.front_default} 
          alt='pokemon sprite missing' 
          onClick={() => revealPokemon()} />
      </div>
      <div className='input-answer'>
        <form onSubmit={() => revealPokemon()}>
          <h5>WHO&apos;S THAT POKEMON?</h5>
          <input 
            className='answer' 
            placeholder='It&apos;s...' 
            onChange={(event) => setAnswer(event.target.value.toLowerCase())}></input>
          <input 
            className='submit' 
            type='submit' 
            value='Answer'/>
        </form>
      </div>
      <ScoreBoard />
    </div>
  )
}
