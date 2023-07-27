function Navbar() {
  return (
    <div className="flex justify-between items-center p-10 bg-slate-800 text-white h-16">
      <h1>AmazonClone</h1>

      <p>Delivery to Germany</p>
      <div>
        <select className="w-16 h-16 bg-slate-200 text-black">
          <option>All</option>
          <option>Arts and Crafts</option>
          <option>Automotive</option>
          <option>Baby</option>
          <option>Beaty and Personal care</option>
        </select>
        <input
          placeholder="Search Amazon clone"
          className=" w-48 h-16 rounded-md"
        />
      </div>
      <select className="w-16 h-16 bg-slate-800">
        <option>English-En</option>
        <option>Deutsch-DE</option>
        <option>Eng</option>
        <option>Eng</option>
        <option>Eng</option>
      </select>
      <select className="w-48 h-16 bg-slate-800">
        <option>Hello, Sign in Account and Lists</option>

        <option>Sign in New customer? Start here.</option>

        <option>Eng</option>
        <option>Eng</option>
        <option>Eng</option>
      </select>
      <button>Cart</button>
    </div>
  );
}

export default Navbar;
