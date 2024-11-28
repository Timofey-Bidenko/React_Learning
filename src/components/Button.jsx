function Button({
  classes = "btn",
  onClick = () => {},
  visible = true,
  ariaLabel = "Button",
  text = "Click",
}) {
  return (
    <button
      className={classes}
      onClick={onClick}
      style={{ display: visible ? "block" : "none" }}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}

export default Button;
