import { useLocation } from "react-router";
import Navigate from "./Navigate";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const { pathname } = useLocation();
  const onHomepage = pathname !== "/menu" && pathname !== "/cart";
  const showHeader = pathname !== "/orders" && pathname !== "orders/*";
  console.log(pathname, showHeader);
  

  const { username } = useContext(UserContext);

  if (showHeader) {
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
}

export default Header;
