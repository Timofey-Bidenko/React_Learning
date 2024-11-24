import Button from "./Button";

function Counter({ dCb, iCb, v, visible }) {
  return (
    <div className="counter" style={{ display: visible ? "flex" : "none" }}>
      <Button
        classes="decrement"
        onClick={dCb}
        ariaLabel="Decrease quantity"
        text="-"
      />
      <span>{v}</span>
      <Button
        classes="increment"
        onClick={iCb}
        ariaLabel="Increase quantity"
        text="+"
      />
    </div>
  );
}

export default Counter;
