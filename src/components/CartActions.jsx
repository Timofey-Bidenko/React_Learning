import { useNavigate } from "react-router";
import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../context/CartContext";

function CartActions() {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const goToOrder = () => navigate("/order");
  const clearCart = () => dispatch({ type: "Clear" });
  
  return (
    <div className="cart-actions">
      <Button classes="order-btn" text="Order pizzas" onClick={goToOrder}/>
      <Button classes="clear-btn" text="Clear cart" onClick={clearCart}/>
    </div>
  );
}

export default CartActions;
