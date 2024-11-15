import Header from "./components/Header"
import Input from "./components/Input"
import Form from "./components/Form"
import Button from "./components/Button"


const App = () => {
  return (<>
    <Header classes="logo" text="PIZZA DAY"></Header>
    <Form title="The best pizza." subtitle="Straight out of the oven, straight to you." text="👉 Welcome! Please start by telling us your name:">
      <Input placeholder="Your full name"></Input>
      <Button text="Start Order"></Button>
    </Form>
  </>)
}

export default App