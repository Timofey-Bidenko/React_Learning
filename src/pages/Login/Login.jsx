import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./Login.css";

function LoginPage() {
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  let lastInput = ""

  function handleFormSubmit(e) {
    e.preventDefault();
    setUsername(lastInput);
    console.log("Username ~>", lastInput);
    navigate("/menu");
  }

  function handleInputChange(e) {
    lastInput = e.target.value;
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
        onChange={handleInputChange}
        placeholder="Your full name"
      ></Input>
      <Button onClick={handleFormSubmit} text="Start Order"></Button>
    </main>
  );
}

export default LoginPage;
