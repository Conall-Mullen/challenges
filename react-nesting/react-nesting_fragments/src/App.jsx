import "./App.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

function Boxes({ color }) {
  return (
    <>
      <Box color="#007bff"></Box>
      <Box color="#fc3"></Box>
      <Box color="#ff3333"></Box>
    </>
  );
}
