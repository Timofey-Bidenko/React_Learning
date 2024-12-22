import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";

import Input from "../components/Input";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import { memo } from "react";

import "../OrderForm.css";

const schema = z.object({
  fullName: z.string().nonempty("Full Name Is Required"),
  phone: z
    .string()
    .nonempty("Phone Number Is Required")
    .min(10, "Number must contain at least 10 character(s)")
    .max(14, "Number must contain at most 14 character(s)")
    .regex(/^[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().nonempty("Address Is Required"),
  priority: z.boolean(),
});

function OrderForm() {
  const { username } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [ showError, setShowError ] = useState(false)

  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: username,
      phone: "",
      address: "",
      priority: false,
    },
    resolver: zodResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const priority = useWatch({
    control,
    name: "priority",
  });
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const finalPriceRaw = priority ? totalPrice * 1.2 : totalPrice;
  const finalPrice = Math.floor(finalPriceRaw);

  async function handleFormSubmit(data) {
    
    if (!isValid) return;
    setShowError(false)

    const bodyData = {
      customer: data.fullName,
      address: data.address,
      phone: data.phone,
      priority: data.priority,
      position: "",
      cart: cart.map((item) => {
        return {
          name: item.name,
          pizzaId: item.id,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
          unitPrice: item.price
        }
      })
    }

    const response = await fetch("https://react-fast-pizza-api.onrender.com/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
    
    const responseData = await response.json();
    
    if (responseData.status === "success") {
      navigate(`/orders/${responseData.data.id}`);
    } else {
      setShowError(true)
      form.reset();
    }
  }

  return (
    <div className="container">
      <h1>Ready to order? Let's go!</h1>

      {showError && <p className="error">Something went wrong. Please try again.</p>}
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <Input
              id="fullName"
              name="fullName"
              value={username}
              isReadOnly={Boolean(username)}
              isRequired={true}
              control={control}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              isRequired={true}
              control={control}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <div className="input-wrapper">
              <Input
                id="address"
                name="address"
                isRequired={true}
                control={control}
              />
              {errors.address && (
                <p className="error">{errors.address.message}</p>
              )}
            </div>
          </div>

          <div className="checkbox-group">
            <div className="checkbox-wrapper">
              <Input
                type="checkbox"
                id="priority"
                name="priority"
                control={control}
              />
              <label htmlFor="priority">
                Want to give your order priority?
              </label>
            </div>
          </div>

          <Button
            type="submit"
            classes="order-btn"
            text={"Order now for €" + finalPrice + ".00"}
          />
        </form>
      </FormProvider>
    </div>
  );
}

export default memo(OrderForm);
