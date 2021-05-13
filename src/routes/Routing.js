import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPaths from './RoutingPaths'
import { EpisodesCatalogueView } from '../views/episodescatalogueview/EpisodesCatalogueView'
import { EpisodeView } from '../views/episodeview/EpisodeView'


export const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={RoutingPaths.episodeView} component={EpisodeView}></Route>
          <Route component={EpisodesCatalogueView}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
