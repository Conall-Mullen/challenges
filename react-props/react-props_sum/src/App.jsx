import "./App.css";

export default function App() {
  return <Sum ValueA={4} ValueB={5} />;
}

function Sum({ ValueA, ValueB }) {
  let ValueC = ValueA + ValueB;

  return (
    <h1>
      {ValueA} + {ValueB} = {ValueC}
    </h1>
  );
}
