import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ title, subtitle, text }) => {
  const [username, setUsername] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Username ~>", username);
  }

  function handleInputChange(e) {
    setUsername(e.target.value);
  }
  return (
    <main>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p className="welcome">{text}</p>
      <Input
        value={username}
        onChange={handleInputChange}
        placeholder="Your full name"
      ></Input>
      <Button onClick={handleFormSubmit} text="Start Order"></Button>
    </main>
  );
};

export default Form;
