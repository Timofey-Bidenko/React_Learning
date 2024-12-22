import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import CartPage from "./pages/Cart";
import OrderForm from "./pages/OrderForm";
import OrderStatus from "./pages/OrderStatus";

import "./index.css";
import Header from "./components/Header";

import UserContextProvider from "./context/UserContext";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/orders/:id" element={<OrderStatus />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
