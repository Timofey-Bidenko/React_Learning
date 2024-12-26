import { useNavigate } from "react-router";
import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../context/CartContext";

function CartActions() {
  const navigate = useNavigate();
  const { clear } = useContext(CartContext);

  const goToOrder = () => navigate("/order");
  
  return (
    <div className="cart-actions">
      <Button classes="order-btn" text="Order pizzas" onClick={goToOrder}/>
      <Button classes="clear-btn" text="Clear cart" onClick={clear}/>
    </div>
  );
}

export default CartActions;
