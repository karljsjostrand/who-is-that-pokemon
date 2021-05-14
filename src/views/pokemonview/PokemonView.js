import './PokemonView.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import RoutingPaths from '../../routes/RoutingPaths'
import WhosThatPokemonImage from '../../shared/resources/images/whos-that-pokemon.bmp'

export const PokemonView = () => {
  const history = useHistory()
  const location = useLocation()
  const [answer, setAnswer] = useState('')
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    setPokemon(location.state.pokemon)
    setAnswer(location.state.answer)
    location.state.answer === location.state.pokemon.name ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)

    console.log(location.state)
  }, [location.state])

  const fetchAbilities = () => {

  }

  // Returns string with the first letter to upper case. Combined names have each - separated part capitalized.
  const capitalizeName = (str) => {
    if (!str) return undefined

    let split = str.split(/(-)/g)
    return split.map(str => str.charAt(0).toUpperCase() + str.slice(1))
  }

  const displayAnswer = () => {
    if (!answer) 
      return
    else
      if (isCorrectAnswer)
        return <div>
          <h1 className='answer-correct'>✔</h1>
        </div>
      else
        return <div>
          <h1 className='answer-not-correct'>✖</h1>
        </div>
  }

  const displayAbilities = () => {

    return pokemon?.abilities?.map((abi, i) => <div key={i}>
      <h3>{capitalizeName(abi.ability.name)}</h3>
      <h4>ability text</h4>
    </div>
    )
  }

  const displayPokemon = () => {
    return <div>
      <h1>It's {capitalizeName(pokemon?.name)}!</h1>
      <h2>Abilities</h2>
      {displayAbilities()}
      <img src={pokemon?.sprites?.front_default} alt='pokemon sprite' />
    </div>
  }

  return (
    <div>
      {displayAnswer()}
      {displayPokemon()}
      <img className='whos-that-pokemon' src={WhosThatPokemonImage} alt='whos that pokemon?' onClick={() => history.push(RoutingPaths.whosThatPokemonView)} />
    </div>
  )
}
