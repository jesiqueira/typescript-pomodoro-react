import React, { useEffect } from 'react'
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
  const [isActive, setIsActive] = React.useState(false)
  const [isWorking, setisWorking] = React.useState(false)

  useEffect(() => {
    if (isWorking) document.body.classList.add('working')
    if (!isWorking) document.body.classList.remove('working')
  }, [isWorking])

  useInterval(
    () => {
      setMainTimer((prev) => (prev > 0 ? prev - 1 : 0))
    },
    isActive ? 1000 : null,
  )

  const configureWork = () => {
    setisWorking(true)
    setIsActive(true)
    setMainTimer(pomodoroTime)
  }

  const configureRest = () => {
    setisWorking(false)
    setIsActive(false)
  }

  return (
    <div className="pomodoro">
      <h1>Your are: Working</h1>
      <Timer mainTimer={mainTimer} />
      <div className="controls">
        <Button label="Work" onClick={() => configureWork()} className="button" />
        <Button label="Rest" onClick={() => configureRest()} className="button" />
        <Button className={!isActive ? 'hidden' : 'button'} label={isActive ? 'Stop' : 'Start'} onClick={() => setIsActive(!isActive)} />
      </div>
    </div>
  )
}

export default PomodoroTimer
