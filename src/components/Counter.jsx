import Button from "./Button";

function Counter({ decrementCallback, incrementCallback, value, visible }) {
  return (
    <div className="counter" style={{ display: visible ? "flex" : "none" }}>
      <Button
        classes="decrement"
        onClick={decrementCallback}
        ariaLabel="Decrease quantity"
        text="-"
      />
      <span>{value}</span>
      <Button
        classes="increment"
        onClick={incrementCallback}
        ariaLabel="Increase quantity"
        text="+"
      />
    </div>
  );
}

export default Counter;
