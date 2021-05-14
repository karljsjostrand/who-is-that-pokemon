import './WhosThatPokemonView.css'
import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../routes/RoutingPaths'
import PokeAPIService from '../../shared/api/service/PokeAPIService'
import WhosThatPokemonImage from '../../shared/resources/images/whos-that-pokemon.bmp'
import PokeballImage from '../../shared/resources/images/pokeball.png'

export const WhosThatPokemonView = () => {
  const history = useHistory()
  const [pokemon, setPokemon] = useState()
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
  }, [])

  // Navigates user to pokemonView with pokemon and answer objects.
  const revealPokemon = () => {
    history.push(RoutingPaths.pokemonView, { pokemon: pokemon , answer: answer})
  }

  return (
    <div className='whos-that-pokemon-container'>
      <div className='secret-pokemon'>
        <img 
          className='who-is-it' 
          src={WhosThatPokemonImage} 
          alt={'whos that pokemon?'} 
          onClick={() => revealPokemon()} />
        {/* load back sprite, if back is missing load front */}
        <img 
          className={isLoading ? 'secret-pokemon loading ' : 'secret-pokemon'}
          src={isLoading ? PokeballImage 
                         : pokemon?.sprites?.back_default ? pokemon?.sprites?.back_default : pokemon?.sprites?.front_default} 
          alt='pokemon sprite error' 
          onClick={() => revealPokemon()} />
      </div>
      <div className='input-answer'>
        <form onSubmit={() => revealPokemon()}>
          <input 
            className='input-answer' 
            placeholder='WHO&apos;S THAT POKEMON?' 
            onChange={(event) => setAnswer(event.target.value.toLowerCase())}></input>
        </form>
      </div>
      {/* <div>
        <iframe className='youtube-embed' width="280" height="157" src="https://www.youtube-nocookie.com/embed/gOLXYAlC-R8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div> */}
    </div>
  )
}
