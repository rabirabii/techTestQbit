import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import bodyParser from "body-parser";

const app = Express();
// Config
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "config/.env",
  });
}

app.use(Express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down server unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

// Handle Payment
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;

    // Log items to check what is being received
    console.log("Items received for payment:", items);
    // Calculate total amount from cart
    let totalAmount = items.reduce((total, item) => total + item.totalPrice, 0);
    const amountInCents = totalAmount * 100;

    console.log("Total amount calculated:", totalAmount);

    // Ensure the total amount is above Stripe's minimum requirement
    const minimumAmountIDR = 7500;
    if (amountInCents < minimumAmountIDR) {
      amountInCents = minimumAmountIDR;
      console.log(
        "Adjusted total amount to meet minimum requirement:",
        amountInCents
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "idr",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: error.message });
  }
});

app.use("/test", (req, res) => {
  res.send("Hello from backend");
});
