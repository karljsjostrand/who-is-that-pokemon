import { useState, createContext } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = (props) => {
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [skipped, setSkipped] = useState(0)
  
  return (
    <ScoreContext.Provider value={{
      correct: [correct, setCorrect], 
      incorrect: [incorrect, setIncorrect], 
      skipped: [skipped, setSkipped]
      }}>
      {props.children}
    </ScoreContext.Provider>
  )
}