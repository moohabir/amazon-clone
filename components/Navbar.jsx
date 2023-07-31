'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '@/redux/features/cartSlice';

//here router did not work correct it laterand find way to go account component after click

function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cart]);

  return (
    <div className="flex gap-20 items-center  bg-slate-800 text-white h-16  mx-auto w-full p-10">
      <Link href="/">
        <h1>AmazonClone</h1>
      </Link>

      <p>Delivery to Germany</p>
      <div className="flex">
        <select className=" flex w-16 h-16 bg-slate-200 text-black ">
          <option>All</option>

          <option>Arts and Crafts</option>
          <option>Automotive</option>
          <option>Baby</option>

          <option>Electronics</option>
          <option>Beaty and Personal care</option>
        </select>
        <input
          placeholder="Search Amazon clone"
          className=" w-96 h-16 rounded-md "
        />
      </div>
      <select className="w-16 h-8 bg-slate-800">
        <option>English-En</option>
        <option>Deutsch-DE</option>
        <option>Eng</option>
        <option>Eng</option>
        <option>Eng</option>
      </select>
      <select className="w-48 h-16 bg-slate-800">
        <option>Hello, Sign in Account and Lists</option>

        <option>Sign in New customer? Start here.</option>
        <option onClick={() => router.push('/account')}>Account</option>
      </select>
      <Link
        href="/cart"
        className="flex flex-col"
      >
        {totalAmount > 0 && <button>{totalAmount}</button>}
        <button>Cart</button>
      </Link>
    </div>
  );
}

export default Navbar;
