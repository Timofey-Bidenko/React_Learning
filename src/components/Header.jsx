import { useLocation } from "react-router";
import Navigate from "./Navigate";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const { pathname } = useLocation();
  const onHomepage = pathname !== "/menu" && pathname !== "/cart";

  const { username } = useContext(UserContext);

  return (
    <header>
      <div className="logo">PIZZA DAY</div>
      {!onHomepage && (
        <>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for the order #"
          />
          <div className="username">
            {username ? username.toUpperCase() : ""}
          </div>
          <Navigate></Navigate>
        </>
      )}
    </header>
  );
}

export default Header;
