import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize the Stripe API with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    // Parse the request body to get the payment details from the client
    const requestBody = await request.json();
    const { amount, currency, paymentMethodId, customer } = requestBody;

    let customerId;
    if (customer && customer.user) {
      const { name, email } = customer.user;
      const stripeCustomer = await stripe.customers.create({
        name,
        email,
      });
      customerId = stripeCustomer.id;
    }

    // Create a PaymentIntent on Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
      customer: customerId,
      //metadata: {
      // Add user and cart metadata to the payment intent
      //name: user.usertokenData.name,
      //email: user.usertokenData.email,
      //cart: cart.map((product) => ({
      // id: product._id,
      // title: product.title,
      // description: product.description,
      // price: product.price,
      //})),
      //},
    });

    // If the payment is successful, return a success response
    if (paymentIntent.status === 'succeeded') {
      return NextResponse.json(
        { success: true, paymentIntent },
        { status: 200 }
      );
    } else {
      // If the payment fails, return an error response
      return NextResponse.json(
        { error: 'Payment processing failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
