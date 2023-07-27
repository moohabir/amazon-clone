function Navbar() {
  return (
    <div className="flex justify-between items-center px-5 py-10 bg-slate-800 text-white h-32">
      <h1>AmazonClone</h1>

      <p>Delivery to Germany</p>
      <div>
        <select className="w-16 h-16 bg-slate-200">
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
      <p>Home</p>
      <p>Home</p>
      <button>Cart</button>
    </div>
  );
}

export default Navbar;
