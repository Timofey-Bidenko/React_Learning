import QuantityControls from "./QuantityControls";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ itemInfo }) {
  const name = itemInfo.name ?? "ItemName";
  const price = itemInfo.price ? parseInt(itemInfo.price) : 123;
  const quantity = itemInfo.quantity ? parseInt(itemInfo.quantity) : 1;
  const itemId = itemInfo.id;

  const { dispatchCart } = useContext(CartContext);

  const handleRemove = () => {
    dispatchCart({ type: "Remove", payload: {id: itemId}});
  }
  const handleIncrement = () => {
    dispatchCart({
      type: "Increment",
      payload: {
        id: itemId
      }
    })
  };
  const handleDecrement = () => {
    if (quantity === 1) {
      handleRemove()
    } else {
      dispatchCart({ type: "Decrement", payload: {id: itemId}});
    }
  };
  
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
