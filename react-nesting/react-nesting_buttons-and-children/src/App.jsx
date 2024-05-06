import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Like</Button>
      <Button>Comment</Button>
      <Button>Share</Button>
      <Button>Report</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
