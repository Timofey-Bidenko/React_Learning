import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useIsoDate from "../hooks/useIsoDate";
import capitalize from "../utils/capitalize";
import Button from "../components/Button";

// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

import "../OrderStatus.css";

function OrderStatus() {
  const { id } = useParams();
  const url = `https://react-fast-pizza-api.onrender.com/api/order/${id}`;
  const [fetchData, error, isLoading] = useFetch(url);

  const [timeLeft, setTimeLeft] = useState("");
  const [showError, setShowError] = useState(false);
  const [onCooldown, setOnCooldown] = useState(false);
  const [data, setData] = useState(fetchData);
  useEffect(() => setData(fetchData), [fetchData])

  const [menuData, menuError, menuLoading] = useFetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  ); // use menu data to get pizza ingredients

  const estimatedDelivery = data ? data.data.estimatedDelivery : null;
  const [formattedDate, dateError, dateLoading] = useIsoDate(estimatedDelivery);
  const timeLeftString = useMemo(() => {
    if (!estimatedDelivery) return null;
  
    const deliveryDate = new Date(estimatedDelivery);
    const currentDate = new Date();
    const timeDiff = deliveryDate - currentDate;
  
    if (timeDiff > 0) {
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      return`${
        hours > 0 ? `${hours} ` + (hours % 10 === 1 ? "hour" : "hours") : ""
      } ${minutes} ${minutes % 10 === 1 ? "minute" : "minutes"}`;
    } else {
      return false;
    }
  }, [estimatedDelivery]);
  useEffect(() => {
    if (timeLeftString) {
      setTimeLeft(`Only ${timeLeftString} left 😃`);
    } else {
      setTimeLeft("Order should have arrived");
    }
  }, [timeLeftString]);  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p className="error">Something went wrong. Please try again.</p>;
  }
  if (!data || !data.data) {
    return <p className="error">Order not found</p>;
  }

  const { priority, status, cart, orderPrice, priorityPrice } = data.data;

  async function prioritize() {
    setOnCooldown(true);
    setShowError(false);

    const response = await fetch(
      url,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priority: true,
        }),
      }
    );

    const responseData = await response.json();

    if (responseData.status === "success") {
      setData(responseData);
    } else {
      setShowError(true);
      setOnCooldown(false);
    }
  }

  return (
    <div className="container">
      {!isLoading && (
        <>
          <div className="header">
            <h1 className="order-title">
              Order #{id} status: {status}
            </h1>
            <div className="badges">
              {priority && (
                <span className="badge badge-priority">PRIORITY</span>
              )}
              <span className="badge badge-preparing">
                {status.toUpperCase()} ORDER
              </span>
            </div>
          </div>

          <div className="time-banner">
            <div className="time-left">{timeLeft}</div>
            <div className="estimated-time">
              (Estimated delivery:{" "}
              {dateLoading ? "Loading..." : formattedDate || "Error"})
            </div>
          </div>

          <div className="order-details">
            {cart.map((item, index) => (
              <div className="pizza-item" key={index}>
                <div className="pizza-header">
                  <span className="pizza-name">
                    {item.quantity}× {item.name}
                  </span>
                  <span className="pizza-price">€{item.totalPrice}.00</span>
                </div>
                <div className="ingredients">
                  {menuLoading
                    ? "Loading..."
                    : menuData
                    ? capitalize(
                        menuData.data
                          .find((pizza) => pizza.id === item.pizzaId)
                          .ingredients.join(", ")
                      )
                    : "Error"}
                </div>
              </div>
            ))}
          </div>

          <div className="price-breakdown">
            <div className="price-item">
              <span className="price-label">Price pizza:</span>
              <span className="price-value">€{orderPrice}.00</span>
            </div>
            {priority && (
              <div className="price-item">
                <span className="price-label">Price priority:</span>
                <span className="price-value">€{priorityPrice}.00</span>
              </div>
            )}
            <div className="price-item">
              <span className="price-label">To pay on delivery:</span>
              <span className="price-value">
                €{orderPrice + (priority ? priorityPrice : 0)}.00
              </span>
            </div>
          </div>

          {!priority && !onCooldown && (
            <>
              {showError && (
                <p className="error">Something went wrong. Please try again.</p>
              )}
              <Button
                onClick={prioritize}
                text="Prioritize"
                classes="add-to-cart duration-400 hover:cursor-pointer text-sm focus:ring inline-block rounded-xl bg-yellow-500 font-semibold uppercase tracking-wide text-slate-800 transition-colors hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2 md:px-5 md:py-2.5 text-sm"
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default OrderStatus;
