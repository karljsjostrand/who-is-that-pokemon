import './ScoreBoard.css'
import { useContext, useState, useEffect } from 'react'
import { ScoreContext } from './../../shared/provider/ScoreProvider'

export const ScoreBoard = () => {
  const { correct:[correct], wrong:[wrong], skipped:[skipped] } = useContext(ScoreContext)

  return (
    <div className='score-container'>
      <h4 className='score-header'>Score</h4>

      <h5 className='correct'>Correct:</h5>
      <h3 className='score-correct'>{correct}</h3>

      {/* TODO partially correct? like "pika" or "pikashu" to "pikachu" */}

      <h5 className='wrong'>Wrong:</h5>
      <h3 className='score-wrong'>{wrong}</h3>

      <h5 className='skipped'>Skipped:</h5>
      <h3 className='score-skipped'>{skipped}</h3>

      {/* <button onClick={() => console.log(score.correct)}>log score</button> */}
    </div>
  )
}
