import Link from 'next/link';
import GiftCards from '../giftCards/page';
import Login from '../login/page';
import YourAddress from '../yourAddress/page';
import YourPayment from '../yourPayment/page';
import YourOrders from '../yourOrders/page';

export default function Account() {
  return (
    <div className="">
      <h1>Your Account</h1>
      <div className="grid grid-cols-3 items-center justify-between p-24 gap-10 ">
        <Link href="/yourOrders">
          <YourOrders />
        </Link>
        <Link href="/login">
          <Login />
        </Link>
        <Link href="/yourPayment">
          <YourPayment />
        </Link>
        <Link href="/yourAddress">
          <YourAddress />
        </Link>
        <Link href="/yourCards">
          <GiftCards />
        </Link>
        <Link href="/yourPayment">
          <YourPayment />
        </Link>
      </div>
    </div>
  );
}
