import { Button } from "@/components/ui/button";
import { clearCart } from "@/redux/slice/cartSlice";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StripeCheckout = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector((state) => state.cart.items);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      data: { clientSecret },
    } = await axios.post("http://localhost:5001/create-payment-intent", {
      items: cartItems,
    });

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        dispatch(clearCart());
        localStorage.removeItem("cart");
        setLoading(false);
        alert("Payment Successful!");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay now"}
      </Button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default StripeCheckout;
