import "./App.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  if (isHappy) {
    return <p>😄</p>;
  } else {
    return <p>😔</p>;
  }
}
