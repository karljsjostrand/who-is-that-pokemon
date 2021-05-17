import { useState, createContext, ReactChild } from 'react';

export const PokemonContext = createContext()

export const PokemonProvider = (props) => {
  const [pokemon, setPokemon] = useState()

  return (
    <PokemonContext.Provider value={[pokemon, setPokemon]}>
      {props.children}
    </PokemonContext.Provider>
  )
}
