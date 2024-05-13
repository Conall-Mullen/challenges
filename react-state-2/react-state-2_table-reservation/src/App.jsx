import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  let [people, setPeople] = useState(0);
  function handleIncrement() {
    setPeople(++people);
  }
  function handleDcrement() {
    setPeople(--people);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDcrement} />
      <p>
        {people === 1
          ? `You are going to reserve a table for ${people} person.`
          : `You are going to reserve a table for ${people} people.`}
      </p>
    </div>
  );
}
