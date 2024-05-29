import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  const product = data;

  if (error) {
    return <h1>Could not retrive the data</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>
        Price: {product.currency}
        {product.price}
      </p>
    </>
  );
}
