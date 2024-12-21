import Button from "./Button";
import Counter from "./Counter";

function QuantityControls({ decrementCallback, incrementCallback, deleteCallback=()=>{}, value }) {
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
      <Button classes="delete-btn" text="DELETE" onClick={deleteCallback}/>
    </div>
  );
}

export default QuantityControls;
