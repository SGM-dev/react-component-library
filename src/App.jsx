import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Star onChange={() => console.log("Toggled!")} />
      <br />
    </main>
  );
}

export default App;
