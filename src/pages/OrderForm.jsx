import Input from "../components/Input";
import Button from "../components/Button"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../OrderForm.css";
import { useNavigate } from "react-router";

function OrderForm() {
  const { username } = useContext(UserContext);
  const navigate = useNavigate()

  function handleFormSubmit(e) {
    e.preventDefault();
    navigate("/orders/:id");
  }
  return (
    <div className="container">
      <h1>Ready to order? Let's go!</h1>
        
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Input id="firstName" value={username} isReadOnly={true}/>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <Input type="tel" id="phone" isRequired={true}/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <div className="input-wrapper">
                    <Input id="address" isRequired={true}/>
                </div>
            </div>

            <div className="checkbox-group">
                <div className="checkbox-wrapper">
                    <Input type="checkbox" id="priority"/>
                    <label htmlFor="priority">Want to give your order priority?</label>
                </div>
            </div>

            <Button onClick={handleFormSubmit} type="submit" classes="order-btn" text="Order now for €123.00"/>
        </form>
    </div>
  );
}

export default OrderForm;
