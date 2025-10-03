type ButtonProps = {
  label: string
  onClick?: () => void
  className?: string
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.label}
      </button>
    </div>
  )
}

export default Button
