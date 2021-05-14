import './PokemonView.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import PokeAPIService from '../../shared/api/service/PokeAPIService'
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

  const fetchAbility = async (nameOrId) => {
    const { data } = await PokeAPIService.getAbility(nameOrId)
    data.effect_entries.forEach(element => {
      if (element.language.name === 'en')
        return element.effect
    });
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

  const displayPokemon = () => {
    return <div>
      <h1>It's {capitalizeName(pokemon?.name)}!</h1>
      <img src={pokemon?.sprites?.front_default} alt='pokemon sprite' />
      <h2>Abilities</h2>
      {displayAbilities()}
    </div>
  }

  const displayAbilities = () => {
    return pokemon?.abilities?.map((abi, i) => <div key={i}>
      <h3>{capitalizeName(abi.ability.name)}</h3>
      {/* {abi.ability = [...abi.ability, ]} */}
      {/* {fetchAbility(abi.ability.name)} */}
      <h4>{abi.ability.url}</h4>
    </div>
    )
  }
  
  return (
    <div className='pokemon-container'>
      {displayAnswer()}
      {displayPokemon()}
      <img className='whos-that-pokemon' src={WhosThatPokemonImage} alt='whos that pokemon?' onClick={() => history.push(RoutingPaths.whosThatPokemonView)} />
    </div>
  )
}
