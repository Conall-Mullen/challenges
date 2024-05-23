import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());
const URL = "https://swapi.py4e.com/api/people/";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  console.log("Character");
  const { data, isLoading, error } = useSWR(`${URL}${id}`, fetcher);

  if (isLoading) return <h1>is loading</h1>;

  console.log("data", data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
