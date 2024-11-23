import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Form from "./components/Form"
import Button from "./components/Button"


const App = () => {
  const [username, setUsername] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log("Username ~>", username)
  }

  function handleInputChange(e) {
    setUsername(e.target.value)
  }

  return (<>
    <Header classes="logo" text="PIZZA DAY"></Header>
    <Form title="The best pizza." subtitle="Straight out of the oven, straight to you." text="👉 Welcome! Please start by telling us your name:">
      <Input value={username} onChange={handleInputChange} placeholder="Your full name"></Input>
      <Button onClick={handleFormSubmit} text="Start Order"></Button>
    </Form>
  </>)
}

export default App