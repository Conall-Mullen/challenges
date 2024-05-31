import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((fish) => (
          <li key={fish._id}>
            <StyledLink href={`/${fish._id}`}>{fish.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
