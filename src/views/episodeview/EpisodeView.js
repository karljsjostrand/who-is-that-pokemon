import React from 'react'
import { useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import RoutingPaths from '../../routes/RoutingPaths'

export const EpisodeView = () => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    console.log(location.state)
  }, [location.state])

  return (
    <div>
      <button onClick={() => history.push(RoutingPaths.episodesCatalogueView)}>Catalogue</button>
      <h1>{location.state.header}</h1>
      <h2>
        ⏮ 
        ⏪
      </h2>
      <h2>..img..</h2>
      <h2>
        ⏩ 
        ⏭
      </h2>
    </div>
  )
}
