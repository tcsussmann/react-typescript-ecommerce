import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const handleCheckout = () => {
    dispatch(clearCart());
    alert("Checkout successful! Your cart has been cleared.");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width="100"
              />

              <h2>{product.title}</h2>

              <p>${product.price}</p>

              <button
                onClick={() =>
                  dispatch(removeFromCart(product.id))
                }
              >
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h2>Total Items: {cartItems.length}</h2>

          <h2>
            Total Price: ${total.toFixed(2)}
          </h2>

          <button onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;