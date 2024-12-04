import { NavLink } from "react-router-dom";

function Navigate() {
  return (
    <div className="NavWrapHeader">
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}

export default Navigate;
