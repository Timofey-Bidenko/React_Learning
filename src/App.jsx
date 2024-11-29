import LoginPage from "./components/LoginPage";
import MenuPage from "./components/MenuPage";
import CartPage from "./components/CartPage";

import "./Menu.css"; // Change upon changing the page (Has to be done here, to prevent css conflicts)
// When using LoginPage, you need to add class="container" to the root div in index.html
// When using a different page, remove class="container" from the root div in index.html

function App() {
  return (
    <>
      <MenuPage />
    </>
  );
}

export default App;
