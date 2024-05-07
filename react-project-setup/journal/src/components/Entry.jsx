import "./Entry.css";
export default function Entry() {
  return (
    <li>
      <h2 className="entry__title">Diary Entry</h2>
      <time dateTime="2024-07-05" className="entry__date"></time>
      <p className="entry__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio
        architecto officiis molestiae libero nulla suscipit consequuntur,
        repellat quod provident ad vero! Deleniti soluta odio, totam ex voluptas
        sunt repellendus.
      </p>
      <button className="entry__favourite-button">Favourite</button>
    </li>
  );
}
