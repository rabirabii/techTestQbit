// StripeWrapper.js
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "@/pages/StripeCheckout";

const stripePromise = loadStripe(
  "pk_test_51P6iTlJgmamDHRmK8fXR2m4vFcZYOC5H0OHaLtNBd5LqLRHwbylUe35WH27O9r8t9NrBUddcyISnw9hNAYgyU2iJ00iwTI5C36"
);

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckout />
    </Elements>
  );
};

export default StripeWrapper;
