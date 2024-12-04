import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../Login.css";

function LoginPage() {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Username ~>", username);
    navigate("/menu");
  }

  function handleInputChange(e) {
    setUsername(e.target.value);
  }
  return (
    <main>
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <Input
        classes="loginInput"
        value={username}
        onChange={handleInputChange}
        placeholder="Your full name"
      ></Input>
      <Button onClick={handleFormSubmit} text="Start Order"></Button>
    </main>
  );
}

export default LoginPage;
