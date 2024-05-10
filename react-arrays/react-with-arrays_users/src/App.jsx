import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      {USERS.map((user) => (
        <div className="app__card-grid" key={user.id}>
          <Card name={user.name} roles={user.roles} about={user.about} />
        </div>
      ))}
    </main>
  );
}
