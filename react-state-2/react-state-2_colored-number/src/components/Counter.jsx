import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import "./Counter.css";

export default function Counter() {
  let [value, setValue] = useState(0);

  function increment() {
    setValue(++value);
  }
  function decrement() {
    setValue(--value);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
