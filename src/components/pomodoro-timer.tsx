import React from 'react'
import { useInterval } from '../hooks/use-interval'
import Button from './button'
import Timer from './timer'

type PomodoroTimerProps = {
  pomodoroTime?: number
  shortRestTime?: number
  longRestTime?: number
  cycles?: number
}

const PomodoroTimer = ({ pomodoroTime = 1500 }: PomodoroTimerProps) => {
  const [mainTimer, setMainTimer] = React.useState(pomodoroTime)

  useInterval(() => {
    setMainTimer((prev) => (prev > 0 ? prev - 1 : 0))
  }, 1000)

  return (
    <div className="pomodoro">
      <h1>Your are: Working</h1>
      <Timer mainTimer={mainTimer} />
      <div className="controls">
        <Button label="Start" onClick={() => {}} className="button" />
        <Button label="Start" onClick={() => {}} className="button" />
        <Button label="Start" onClick={() => {}} className="button" />
      </div>
    </div>
  )
}

export default PomodoroTimer
