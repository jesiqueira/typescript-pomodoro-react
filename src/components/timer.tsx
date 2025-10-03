import SecondsToTime from "../utils/seconds-to-time"

type TimeProps = {
  mainTimer: number
}

const Timer = (props: TimeProps) => {
  return <div className="timer">{SecondsToTime(props.mainTimer)}</div>
}

export default Timer
