import Button from "./Button";

function CartActions() {
  return (
    <div className="cart-actions">
      <Button classes="order-btn" text="Order pizzas" />
      <Button classes="clear-btn" text="Clear cart" />
    </div>
  );
}

export default CartActions;
