import { cartItems as data } from "../CartData";
import CartItems from "../components/CartItems";
import CartActions from "../components/CartActions";
import { NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../Cart.css";

function CartPage() {
  const { username } = useContext(UserContext);
  return (
    <div className="container">
      <NavLink to="/menu" className="back-link">
        ← Back to menu
      </NavLink>
      <h1 className="cart-title">
        Your cart{username ? ", " + username.toLowerCase() : " ⤵️"}
      </h1>
      <CartItems data={data} />
      <CartActions />
    </div>
  );
}

export default CartPage;
