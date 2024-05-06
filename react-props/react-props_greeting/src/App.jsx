import "./App.css";

export default function App() {
  return <Greeting name="Conall" isCoach={false} />;
}

function Greeting({ name, isCoach }) {
  if (isCoach === true) {
    return <h1>Hello Coach!{""}</h1>;
  } else {
    return (
      <h1>
        Hello {name}!{""}
      </h1>
    );
  }
}
