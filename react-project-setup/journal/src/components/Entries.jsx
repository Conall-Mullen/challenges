import Entry from "./Entry";
import "./Entries.css";
export default function Entries() {
  return (
    <section>
      <nav className="nav">
        <button>All Entries</button>
        <button>Favourites</button>
      </nav>
      <ul className="entries">
        <Entry />
        <Entry />
        <Entry />
      </ul>
    </section>
  );
}
