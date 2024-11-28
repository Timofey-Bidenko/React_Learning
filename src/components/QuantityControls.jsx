import Button from "./Button";
import Counter from "./Counter";

function QuantityControls({ decrementCallback, incrementCallback, value }) {
  return (
    <div className="quantity-controls">
      <Counter
        wrapAsDiv={false}
        decrementCallback={decrementCallback}
        decrementClasses="quantity-btn"
        incrementCallback={incrementCallback}
        incrementClasses="quantity-btn"
        value={value}
      />
      <Button classes="delete-btn" text="DELETE" />
    </div>
  );
}

export default QuantityControls;
