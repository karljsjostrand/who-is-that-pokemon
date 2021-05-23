import './PokemonView.css'
import { useEffect, useState, useContext } from 'react'
import { PokemonContext } from '../../shared/provider/PokemonProvider'
import { useHistory, useLocation } from "react-router-dom";
import RoutingPaths from '../../routes/RoutingPaths'
import PokeAPIService from '../../shared/api/service/PokeAPIService'
import { ScoreContext } from './../../shared/provider/ScoreProvider'
import StringUtils from './../../utils/StringUtils'

import WhosThatPokemonImg from '../../shared/resources/images/whos-that-pokemon.bmp'
import LoadingImg from '../../shared/resources/images/pokeball.png'

export const PokemonView = () => {
  const language = 'en'
  const history = useHistory()
  const location = useLocation()
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [pokemon] = useContext(PokemonContext)
  const [pokemonAbilities, setPokemonAbilities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { 
    correct: [correct, setCorrect], 
    incorrect: [incorrect, setIncorrect], 
    revealed: [revealed, setRevealed] 
  } = useContext(ScoreContext)

  useEffect(() => {
    if (!pokemon) {
      history.push(RoutingPaths.whosThatPokemonView)
    }
    location.state.answer === pokemon?.name ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)
    fetchAbilities()
    updateScore()
  }, [])

  const fetchAbility = async (name) => {
    const { data } = await PokeAPIService.getAbility(name)

    let effect = 'Effect text missing...'
    data.effect_entries.forEach(effectEntry => {
      if (effectEntry.language.name === language) {
        effect = effectEntry.effect
      }
    });
    setPokemonAbilities(prevAbilities => [...prevAbilities, {name: data.name, effect: effect}])
  }
  
  const fetchAbilities = () => {
    try {
      pokemon.abilities.forEach(abi => {
        fetchAbility(abi.ability.name)
      });
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateScore = () => {
    if (!location.state.answer)
      setRevealed(revealed + 1)
    else
      if (location.state.answer === pokemon?.name)
        setCorrect(correct + 1)
      else
        setIncorrect(incorrect + 1)
  }

  // Displays whether the answer was correct or not. Displays nothing if answer was not attempted. 
  const displayAnswer = () => {
    if (!location.state.answer)
      return undefined
    else
      if (isCorrectAnswer)
        return <h1 className='answer-correct'>✔</h1>
      else
        return <h1 className='answer-not-correct'>✖</h1>
  }

  const displayPokemon = () => {
    return <div>
      <h1>It's {StringUtils.capitalizeName(pokemon?.name)}!</h1>
      <img src={pokemon?.sprites?.front_default} alt='pokemon sprite' />
      <h2>Abilities</h2>
      {isLoading ? displayLoading() : displayPokemonAbilities()}
    </div>
  }
  
  const displayLoading = () => {
    return <img className='loading' width='48px' src={LoadingImg} alt='loading...' />
  }

  const displayPokemonAbilities = () => {
    return pokemonAbilities.map((ability, i) => 
    <div className='pokemon-ability' key={i}>
      <h3>{StringUtils.capitalizeName(ability.name)}</h3>
      <h4 className='pokemon-ability-effect'>{ability.effect}</h4>
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
