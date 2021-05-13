import React from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPaths from '../../routes/RoutingPaths'

export const EpisodesCatalogueView = () => {
  const history = useHistory()

  return (
    <div>
      <h1>Select an episode to view</h1>
      <h2>Current</h2>
      <button onClick={() => history.push(RoutingPaths.episodeView, 'Current')}>Current</button>
      <h2>Random</h2>
      <button>Random</button>
      <h2>Previews</h2>
      <button>P1</button>
      <button>P2</button>
      <button>P3</button>
    </div>
  )
}
