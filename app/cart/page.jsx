'use client';
import { useAppSelector } from '@/redux/store';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
//import type { RootState } from '@/redux/store';
import CartItems from '@/components/CartItems';

import { calculateTotals } from '@/redux/features/cartSlice';
export default function Cart() {
  const dispatch = useDispatch();

  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);
  console.log(cart);

  if (!cart) {
    return (
      <div>
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
            key={item.id}
          />
        ))}

      <p>Total: $totalPrice: $200</p>
      {/*<button onClick={() => dispatch(clearCart())}>Clear cart</button>*/}
      <Link href="/payment">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
