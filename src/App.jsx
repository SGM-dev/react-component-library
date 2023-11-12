import "./App.css";
import Star from "./components/Toggle/Star";
import Toggle from "./components/Toggle/index";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
      </Toggle>
    </main>
  );
}

export default App;
