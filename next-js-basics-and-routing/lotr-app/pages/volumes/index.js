import { volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  function getRandomElement(array) {
    router.push(
      `./volumes/${array[Math.floor(Math.random() * array.length)].slug}`
    );
  }
  const router = useRouter();
  return (
    <>
      <h2>Volumes</h2>
      <ul>
        {volumes.map(({ slug, title, index }) => (
          <li key={index}>
            <Link href={`./volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => getRandomElement(volumes)}>
        Random Volume
      </button>
    </>
  );
}
