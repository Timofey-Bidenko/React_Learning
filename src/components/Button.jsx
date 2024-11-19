const Button = ({classes = "btn", text = "Click"}) => {
    return <button class={classes}>{text}</button>
}

export default Button;