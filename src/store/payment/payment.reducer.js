import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const PAYMENT_INITIAL_STATE = {
  isLoading: false,
  paymentCompleted: false,
  error: null,
};

export const createPayment = createAsyncThunk(
  "payments/createPayment",
  async (
    { cartTotal, name, email, stripe, elements, cardElement },
    thunkAPI
  ) => {
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ amount: cartTotal * 100 }), // this has to be passed
        }
      ).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;

      const results = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(cardElement),
          billing_details: { name: name, email: email },
        },
      });

      if (results.error) {
        throw new Error(results.error.message);
      } else {
        return results;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payments",
  initialState: PAYMENT_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.paymentCompleted = true;
        state.error = null;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const paymentReducer = paymentSlice.reducer;
