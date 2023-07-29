import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex gap-20 items-center p-10 bg-slate-800 text-white h-16 ">
      <Link href="/">
        <h1>AmazonClone</h1>
      </Link>

      <p>Delivery to Germany</p>
      <div className="flex">
        <select className=" flex w-16 h-16 bg-slate-200 text-black">
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
      </select>
      <Link href="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
}

export default Navbar;
