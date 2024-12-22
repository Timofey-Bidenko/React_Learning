import { useController } from "react-hook-form";
import { memo } from "react";

function Input({
  name = undefined,
  value = undefined,
  classes = "",
  id = "",
  onChange = undefined,
  type = "text",
  placeholder = "",
  isReadOnly = undefined,
  isRequired = undefined,
  control = undefined,
}) {
  if (control) {
    const { field } = useController({
      name,
      control,
    });

    return (
      <input
        name={name}
        className={classes}
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        aria-label={placeholder}
        readOnly={isReadOnly}
        required={isRequired}
        {...field}
      />
    );
  } else {
    return (
      <input
        name={name}
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
}

export default memo(Input);
