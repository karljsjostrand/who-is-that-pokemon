import './ScoreBoard.css'
import { useContext } from 'react'
import { ScoreContext } from './../../shared/provider/ScoreProvider'

export const ScoreBoard = () => {
  const { correct:[correct], incorrect:[incorrect], skipped:[skipped] } = useContext(ScoreContext)

  return (
    <div className='score-container'>
      <h4 className='score-header'>Score</h4>

      <h5 className='correct'>Correct:</h5>
      <h3 className='score-correct'>{correct}</h3>

      <h5 className='incorrect'>Incorrect:</h5>
      <h3 className='score-incorrect'>{incorrect}</h3>

      <h5 className='skipped'>Skipped:</h5>
      <h3 className='score-skipped'>{skipped}</h3>
    </div>
  )
}
