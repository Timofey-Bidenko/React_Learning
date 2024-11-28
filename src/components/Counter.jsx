import Button from "./Button";

function Counter({
  wrapAsDiv = true,
  decrementCallback,
  decrementClasses = "decrement",
  incrementCallback,
  incrementClasses = "increment",
  value,
  visible = true,
}) {
  const content = (
    <>
      <Button
        classes={decrementClasses}
        onClick={decrementCallback}
        ariaLabel="Decrease quantity"
        text="-"
      />
      <span>{value}</span>
      <Button
        classes={incrementClasses}
        onClick={incrementCallback}
        ariaLabel="Increase quantity"
        text="+"
      />
    </>
  );

  return wrapAsDiv ? (
    <div className="counter" style={{ display: visible ? "flex" : "none" }}>
      {content}
    </div>
  ) : (
    content
  );
}

export default Counter;
