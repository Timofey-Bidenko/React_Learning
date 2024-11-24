import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Header classes="logo" text="PIZZA DAY"></Header>
      <Form
        title="The best pizza."
        subtitle="Straight out of the oven, straight to you."
        text="👉 Welcome! Please start by telling us your name:"
      />
    </>
  );
};

export default App;
