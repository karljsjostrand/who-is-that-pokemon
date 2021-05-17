import './PokemonView.css'
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { PokemonContext } from '../../shared/provider/PokemonProvider'
import { useHistory, useLocation } from "react-router-dom";
import RoutingPaths from '../../routes/RoutingPaths'
import PokeAPIService from '../../shared/api/service/PokeAPIService'

import WhosThatPokemonImg from '../../shared/resources/images/whos-that-pokemon.bmp'

export const PokemonView = () => {
  const history = useHistory()
  const location = useLocation()
  const [answer, setAnswer] = useState('')
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [pokemon, setPokemon] = useContext(PokemonContext)

  useEffect(() => {
    setAnswer(location.state.answer)
    location.state.answer === pokemon.name ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)

    console.log(location.state)
  }, [location.state, pokemon.name])

  const fetchAbilities = () => {

  }

  const fetchAbility = async (nameOrId) => {
    const { data } = await PokeAPIService.getAbility(nameOrId)
    const effect = await data.effect_entries[0].effect
    console.log(effect)
    return effect
    // return data.effect_entries[0].effect.Promise.all()
    // return data.effect_entries.map((element, i) => <div>
    //   {/* <h5>{element.effect}</h5> */}
    //   <h5>{i}</h5>
    // </div>
    // )
  }

  // Returns string with the first letter to upper case. Combined names have each - separated part capitalized.
  const capitalizeName = (str) => {
    if (!str) return undefined

    let split = str.split(/(-)/g)
    return split.map(str => str.charAt(0).toUpperCase() + str.slice(1))
  }

  // Displays whether the answer was correct or not. Displays nothing if answer was not attempted. 
  const displayAnswer = () => {
    if (!answer) 
      return undefined
    else
      if (isCorrectAnswer)
        return <h1 className='answer-correct'>✔</h1>
      else
        return <h1 className='answer-not-correct'>✖</h1>
  }

  const displayPokemon = () => {
    return <div>
      <h1>It's {capitalizeName(pokemon?.name)}!</h1>
      <img src={pokemon?.sprites?.front_default} alt='pokemon sprite' />
      <h2>Abilities</h2>
      {displayPokemonAbilities()}
    </div>
  }

  const displayPokemonAbilities = () => {
    return pokemon?.abilities?.map((abi, i) => <div key={i}>
      <h3>{capitalizeName(abi.ability.name)}</h3>
      <h4>{abi.ability.url}</h4>
      {/* TODO ability info */}
      {/* {abi.ability = [...abi.ability, ]} */}
      {/* {fetchAbility(abi.ability.name)} */}
    </div>
    )
  }
  
  return (
    <div className='pokemon-container'>
      {displayAnswer()}
      {displayPokemon()}
      <img className='whos-that-pokemon' src={WhosThatPokemonImg} alt='whos that pokemon?' onClick={() => history.push(RoutingPaths.whosThatPokemonView)} />
    </div>
  )
}
