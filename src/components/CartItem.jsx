import { useEffect, useState } from "react";
import QuantityControls from "./QuantityControls";

function CartItem({ itemInfo }) {
  const name = itemInfo.name ?? "ItemName";
  const price = itemInfo.price ? parseInt(itemInfo.price) : 123;
  const quantity = itemInfo.quantity ? parseInt(itemInfo.quantity) : 1;

  const [amount, setAmount] = useState(quantity);
  const handleIncrement = () => {
    setAmount((last) => last + 1);
  };
  const handleDecrement = () => {
    setAmount((last) => Math.max(last - 1, 1));
  };
  
  return (
    <div className="cart-item">
      <span className="quantity-text">{amount}×</span>
      <span>{name}</span>
      <span className="price">€{price * amount}.00</span>
      <QuantityControls
        decrementCallback={handleDecrement}
        incrementCallback={handleIncrement}
        value={amount}
      />
    </div>
  );
}

export default CartItem;
