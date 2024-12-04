import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import CartPage from "./pages/Cart";

import "./index.css";
import Header from "./components/Header";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

function App() {
  const [username, setUsername] = useState("");

  const userValue = {
    "username": username,
    "setUsername": setUsername,
  };

  return (
    <Router>
      <UserContext.Provider value={userValue}>
        <Header username={username} />
        <>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
