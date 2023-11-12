import "./App.css";
import Star from "./components/Toggle/Star";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Toggle>
        <Star />
      </Toggle>
    </main>
  );
}

export default App;
