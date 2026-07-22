import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";

function Home() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h2>Loading products...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong loading products.</h2>;
  }

 return (
  <div>
    <h1>Products</h1>

    <div className="product-grid">
      {products?.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </div>
);
}

export default Home;
