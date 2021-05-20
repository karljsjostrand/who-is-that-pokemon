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
  const [pokemon] = useContext(PokemonContext)
  const [pokemonAbilities, setPokemonAbilities] = useState([])
  const language = 'en'

  useEffect(() => {
    const fetchAbility = async (name) => {
      const { data } = await PokeAPIService.getAbility(name)
      
      console.log(data.name)

      let effect = undefined
      data.effect_entries.forEach(effectEntry => {
        if (effectEntry.language.name === language) {
          effect = effectEntry.effect
        }
      });
      // functional update - seems to work - though i now get a warning to use a useEffect cleanup function?
      // TODO should i have a useEffect cleanup function?
      setPokemonAbilities(prevAbilities => [...prevAbilities, { name: data.name, effect: effect }]) 
    }
    console.log(pokemon)

    pokemon.abilities.forEach(abi => {
      fetchAbility(abi.ability.name)
    });

    setAnswer(location.state.answer)
    location.state.answer === pokemon.name ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)

  }, [location.state.answer, pokemon])

  // Returns string with the first letter to upper case. Combined names have each (- separated) name capitalized.
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
    return pokemonAbilities.map((ability, i) => 
    <div key={i}>
      <h3>{capitalizeName(ability.name)}</h3>
      <h4>{ability.effect}</h4>
    </div>)
  }
  
  return (
    <div className='pokemon-container'>
      {displayAnswer()}
      {displayPokemon()}
      <img className='whos-that-pokemon' src={WhosThatPokemonImg} alt='whos that pokemon?' onClick={() => history.push(RoutingPaths.whosThatPokemonView)} />
    </div>
  )
}
