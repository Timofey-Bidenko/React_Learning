import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navigate() {
  const { cart } = useContext(CartContext);
  return (
    <div className="NavWrapHeader">
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/menu">Menu</NavLink>
      {cart.length > 0 && <NavLink to="/cart">Cart</NavLink>}
    </div>
  );
}

export default Navigate;
