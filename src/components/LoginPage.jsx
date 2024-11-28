import LoginHeader from "./LoginHeader";
import Form from "./Form";

function LoginPage() {
  return (
    <>
      <LoginHeader classes="logo" text="PIZZA DAY"></LoginHeader>
      <Form
        title="The best pizza."
        subtitle="Straight out of the oven, straight to you."
        text="👉 Welcome! Please start by telling us your name:"
      />
    </>
  );
}

export default LoginPage;
