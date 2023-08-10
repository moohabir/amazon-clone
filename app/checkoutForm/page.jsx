'use client';
import { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const { user } = useSelector((state) => state.user); // Assuming you have user data in the Redux store
  const { cart, totalPrice } = useSelector((state) => state.cart); // Assuming you have cart data in the Redux store
  console.log(user);

  const handlePayment = async () => {
    try {
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message);
        return;
      }

      // Include user and cart data in the metadata if user exists
      const customer = {};
      if (user && user.usertokenData) {
        customer.user = {
          name: user.usertokenData.name,
          email: user.usertokenData?.email,
          // Add other user data as needed
        };
      }

      // metadata.cart = cart.map((item) => ({
      // id: item._id,
      // title: item.title,
      // description: item.description,
      // price: item.price,
      // Add other item data as needed
      // }));

      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalPrice, // Stripe expects the amount in cents
          currency: 'eur', // Replace 'usd' with your desired currency code
          paymentMethodId: paymentMethod.id,
          customer: customer,
          //user: metadata.user, // Pass the user object in the request body
          //cart: metadata.cart, // Pass the cart data in the request body
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setPaymentSuccess(true);
      } else {
        setPaymentError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setPaymentError('Something went wrong');
    }
  };

  return (
    <div className="bg-slate-400 text-white ">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#ffff',
              '::placeholder': {
                color: '#ffff',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {paymentError && <p className="error-message">{paymentError}</p>}
      {paymentSuccess && <p className="success-message">Payment successful!</p>}
      <button
        onClick={handlePayment}
        className=""
      >
        Pay Now
      </button>
    </div>
  );
};

export default CheckoutForm;
