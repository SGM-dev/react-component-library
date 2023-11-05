import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <main>
      <Button size="sm" variant="warning" onClick={() => console.log("...logging in")}>
        Click Here
      </Button>
    </main>
  );
}

export default App;
