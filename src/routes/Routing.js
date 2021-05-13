import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPaths from './RoutingPaths'
import { WhosThatPokemonView } from '../views/whosthatpokemonview/WhosThatPokemonView'
import { PokemonView } from '../views/pokemonview/PokemonView'


export const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={RoutingPaths.pokemonView} component={PokemonView}></Route>
          <Route component={WhosThatPokemonView}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
