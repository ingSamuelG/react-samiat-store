require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = stripe.PaymentItents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    console.log(paymentIntent);
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(error);
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
