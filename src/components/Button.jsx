const Button = ({onClick, classes = "btn", text = "Click"}) => {
    return <button onClick={onClick} class={classes}>{text}</button>
}

export default Button;