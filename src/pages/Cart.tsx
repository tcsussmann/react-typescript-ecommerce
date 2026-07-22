import { useAppSelector } from "../app/hooks";

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="100"
            />

            <h2>{product.title}</h2>

            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;