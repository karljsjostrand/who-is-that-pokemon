import React from 'react'
import { useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import RoutingPaths from '../../routes/RoutingPaths'

export const PokemonView = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    console.log(location.state.pokemon)
  }, [location.state.pokemon])

  return (
    <div>
      <button onClick={() => history.push(RoutingPaths.whosThatPokemonView)}>💥 Again!</button>
      <h1>{location.state.pokemon.name}</h1>
      <span>..img..</span>
    </div>
  )
}
