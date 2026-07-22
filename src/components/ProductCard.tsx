import type { Product } from "../types/Product";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

 const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      <img
  src={product.image}
  alt={product.title}
  width="150"
  onError={(event) => {
    event.currentTarget.src =
      "https://via.placeholder.com/150";
  }}
/>

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <p>{product.category}</p>

      <p className="description">
        {product.description}
      </p>

      <p>
        ⭐ {product.rating.rate}
      </p>

      <button
        onClick={() => dispatch(addToCart(product))}
        >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;