function Input({ value = "", classes="", onChange, type = "text", placeholder = "" }) {
  return (
    <input
      className={classes}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
}

export default Input;
