import Button from "./Button";
import { useNavigate } from "react-router";

function CartActions() {
  const navigate = useNavigate();

  function goToOrder() {
    navigate("/orders");
  }
  
  return (
    <div className="cart-actions">
      <Button classes="order-btn" text="Order pizzas" onClick={goToOrder}/>
      <Button classes="clear-btn" text="Clear cart" />
    </div>
  );
}

export default CartActions;
