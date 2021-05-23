import { useState, createContext } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = (props) => {
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [revealed, setRevealed] = useState(0)
  
  return (
    <ScoreContext.Provider value={{
      correct: [correct, setCorrect], 
      incorrect: [incorrect, setIncorrect], 
      revealed: [revealed, setRevealed]
      }}>
      {props.children}
    </ScoreContext.Provider>
  )
}