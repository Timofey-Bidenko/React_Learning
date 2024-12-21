import CartItem from "./CartItem";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItems() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-items">
      {cart.map((itemInfo) => (
        <CartItem itemInfo={itemInfo} key={itemInfo.id} />
      ))}
    </div>
  );
}

export default CartItems;
