import { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";

function CartControls() {
  const [amount, setAmount] = useState(0);

  const [counterVisible, setCounterVisible] = useState(false);

  function handleVisibilityToggle() {
    setCounterVisible((last) => !last);
    setAmount(1);
  }

  function handleIncrement() {
    setAmount((last) => last + 1);
  }

  function handleDecrement() {
    setAmount((last) => last - 1);
    if (amount <= 1) handleVisibilityToggle();
  }



  return (
    <div className="cart-controls">
      <Button
        classes="add-to-cart"
        text="ADD TO CART"
        onClick={handleVisibilityToggle}
        visible={!counterVisible}
      />
      <Counter
        dCb={handleDecrement}
        iCb={handleIncrement}
        v={amount}
        visible={counterVisible}
      />
    </div>
  );
}

export default CartControls;
