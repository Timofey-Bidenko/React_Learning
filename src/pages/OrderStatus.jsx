import Input from "../components/Input";
import Button from "../components/Button"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../OrderStatus.css";

function OrderForm() {
  const { username } = useContext(UserContext);
  return (
    <div class="container">
        <div class="header">
            <h1 class="order-title">Order #5T460L status: preparing</h1>
            <div class="badges">
                <span class="badge badge-priority">PRIORITY</span>
                <span class="badge badge-preparing">PREPARING ORDER</span>
            </div>
        </div>

        <div class="time-banner">
            <div class="time-left">
                Only 49 minutes left 😃
            </div>
            <div class="estimated-time">
                (Estimated delivery: Dec 12, 01:37 PM)
            </div>
        </div>

        <div class="order-details">
            <div class="pizza-item">
                <div class="pizza-header">
                    <span class="pizza-name">1× Margherita</span>
                    <span class="pizza-price">€12.00</span>
                </div>
                <div class="ingredients">
                    Tomato, Mozzarella, Basil
                </div>
            </div>
        </div>

        <div class="price-breakdown">
            <div class="price-item">
                <span class="price-label">Price pizza:</span>
                <span class="price-value">€12.00</span>
            </div>
            <div class="price-item">
                <span class="price-label">Price priority:</span>
                <span class="price-value">€2.00</span>
            </div>
            <div class="price-item">
                <span class="price-label">To pay on delivery:</span>
                <span class="price-value">€14.00</span>
            </div>
        </div>
    </div>
  );
}

export default OrderForm;
