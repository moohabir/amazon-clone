'use client';

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { calculateTotals, clearCart } from '@/redux/features/cartSlice';
import CartItems from '@/components/CartItems';
import { useEffect } from 'react';
import Login from '../login/page';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  console.log(user);
  console.log(cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cart]);

  if (totalAmount === 0) {
    return (
      <div className=" flex flex-col items-center justify-between p-24 gap-10">
        <h2>Your Cart is Empty! please add items</h2>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center justify-between p-24 gap-10">
      <h2>Your Cart</h2>

      {cart &&
        cart.map((item) => (
          <CartItems
            item={item}
            key={item._id}
          />
        ))}

      <p>Total price: ${totalPrice} </p>
      <p>Total Amount: {totalAmount}</p>
      <button onClick={() => dispatch(clearCart())}>Clear cart</button>

      <button onClick={() => router.push(user ? '/payment' : '/login')}>
        Checkout
      </button>
    </div>
  );
}
