import CartItems from "./CartItems";
import CartActions from "./CartActions";

function Cart({ username, data }) {
  return (
    <div className="container">
      <a href="#" className="back-link">
        ← Back to menu
      </a>
      <h1 className="cart-title">
        Your cart, {username ? username.toLowerCase() : "username"}
      </h1>
      <CartItems data={data} />
      <CartActions />
    </div>
  );
}

export default Cart;
