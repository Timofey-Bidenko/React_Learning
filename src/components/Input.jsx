function Input({
  value = undefined,
  classes = "",
  id = "",
  onChange=()=>{},
  type = "text",
  placeholder = "",
  isReadOnly = undefined,
  isRequired = undefined
}) {
  return (
    <input
      className={classes}
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      readOnly={isReadOnly}
      required={isRequired}
    />
  );
}

export default Input;
