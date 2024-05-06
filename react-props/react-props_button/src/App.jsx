import "./App.css";

export default function App() {
  return <Button color={"#f31601"} disabled={false} text={"hello"} />;
}

function Button({ color, disabled, text, onClick }) {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <button disabled={disabled} style={{ color: color }} onClick={handleClick}>
      {text}
    </button>
  );
}
