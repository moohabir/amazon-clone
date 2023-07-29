function CartItems({ item }) {
  return (
    <div>
      CartItems
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
      <p>${item.price}</p>
    </div>
  );
}

export default CartItems;
