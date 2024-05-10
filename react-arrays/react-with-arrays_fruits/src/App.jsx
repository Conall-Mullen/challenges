import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1340,
      name: "🍐 Pear",
      color: "green",
    },
    {
      id: 1341,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return fruits.map((fruit) => (
    <div className="app" key={fruit.id}>
      <Card id={fruit.id} name={fruit.name} color={fruit.color} />
    </div>
  ));
}
