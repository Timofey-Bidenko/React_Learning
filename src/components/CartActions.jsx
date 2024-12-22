import Button from "./Button";
import { useNavigate } from "react-router";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartActions() {
  const navigate = useNavigate();

  const { cart, dispatchCart } = useContext(CartContext);

  function goToOrder() {
    navigate("/order");
  }

  function clearCart() {
    dispatchCart({ type: "Clear" });
  }
  
  return (
    <div className="cart-actions">
      <Button classes="order-btn" text="Order pizzas" onClick={goToOrder}/>
      <Button classes="clear-btn" text="Clear cart" onClick={clearCart}/>
    </div>
  );
}

export default CartActions;
