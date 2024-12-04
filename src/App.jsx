import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import CartPage from "./pages/Cart";

import "./index.css";
import Header from "./components/Header";

import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </>
      </UserContextProvider>
    </Router>
  );
}

export default App;
