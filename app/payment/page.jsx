'use client';
import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../checkoutForm/page';
import { getStripePromise } from '@/lib/stripe'; // Make sure to import the correct path to getStripePromise

export default function PaymentPage() {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    const fetchPublicKey = async () => {
      const res = await getStripePromise();

      setStripePromise(res);
      console.log(res);
    };
    fetchPublicKey();
  }, []);

  return (
    <>
      <Elements
        stripe={stripePromise}
        //options={{ clientSecret }}
      >
        <CheckoutForm />
      </Elements>
    </>
  );
}
