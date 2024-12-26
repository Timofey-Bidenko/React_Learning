import QuantityControls from "./QuantityControls";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ itemInfo }) {
  const name = itemInfo.name ?? "ItemName";
  const price = "price" in itemInfo ? parseInt(itemInfo.price) : 123;
  const quantity = "quantity" in itemInfo ? parseInt(itemInfo.quantity) : 1;
  const itemId = itemInfo.id;

  const { incrementItem, decrementItem, removeItem } = useContext(CartContext);

  const handleRemove = () => removeItem(itemId);
  const handleIncrement = () => incrementItem(itemId);
  const handleDecrement = () => decrementItem(itemId);

  return (
    <div className="cart-item">
      <span className="quantity-text">{quantity}×</span>
      <span>{name}</span>
      <span className="price">€{price * quantity}.00</span>
      <QuantityControls
        decrementCallback={handleDecrement}
        incrementCallback={handleIncrement}
        deleteCallback={handleRemove}
        value={quantity}
      />
    </div>
  );
}

export default CartItem;
