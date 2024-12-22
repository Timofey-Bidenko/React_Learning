function Button({
  classes = "btn",
  onClick = () => {},
  visible = true,
  ariaLabel = "Button",
  text = "Click",
  type = "",
  disabled = undefined,
}) {
  return (
    <button
      className={classes}
      onClick={onClick}
      style={{ display: visible ? "block" : "none" }}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
