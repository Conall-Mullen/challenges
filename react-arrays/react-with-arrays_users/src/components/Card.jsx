import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ name, roles, about }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      {roles.map((role) => (
        <ul className="card__taglist" key={role}>
          <Tag
            tag={role}
            className={role === "admin" ? "tag--highlight" : "tag"}
          />
        </ul>
      ))}

      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
