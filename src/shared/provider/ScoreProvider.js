import { useState, createContext } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = (props) => {
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [skipped, setSkipped] = useState(0)
  
  return (
    <ScoreContext.Provider value={{
      correct: [correct, setCorrect], 
      wrong: [wrong, setWrong], 
      skipped: [skipped, setSkipped]
      }}>
      {props.children}
    </ScoreContext.Provider>
  )

  // return (
  //   // TODO is this a good way to do multiple values?
  //   <ScoreContext.Provider value={{correct:[correct, setCorrect], wrong:[wrong, setWrong], skipped:[skipped, setSkipped]}}>
  //     {props.children}
  //   </ScoreContext.Provider>
  // )
}