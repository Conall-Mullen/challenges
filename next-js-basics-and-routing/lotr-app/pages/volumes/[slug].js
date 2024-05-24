import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  const { title, description, books, ordinal, cover } = currentVolume;
  console.log(currentVolume);

  return (
    <>
      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              {book.ordinal}: {book.title}
            </li>
          ))}
        </ul>
        <Image src={cover} alt={title} width={210} height={297}></Image>
      </>
    </>
  );
}
