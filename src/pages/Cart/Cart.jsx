import CartItems from "../../components/CartItems";
import CartActions from "../../components/CartActions";
import { NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";

function CartPage() {
  const { username } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <NavLink to="/menu" className="back-link">
        ← Back to menu
      </NavLink>
      {cart.length > 0 ? (<>
        <h1 className="cart-title">
        Your cart{username ? ", " + username.toLowerCase() : " ⤵️"}
      </h1>
      <CartItems />
      <CartActions />
      </>) : (
        <p className="mt-4 text-center font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
        )}
    </div>
  );
}

export default CartPage;
