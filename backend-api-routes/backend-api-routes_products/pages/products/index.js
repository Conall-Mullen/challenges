import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  console.log(data);
  const products = data;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>404 not found</h1>;
  }

  return (
    <>
      <h1>Products: </h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>
              Price: {product.currency}
              {product.price}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
