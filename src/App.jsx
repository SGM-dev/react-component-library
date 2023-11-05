import "./App.css";
import Button from "./components/Button/Button";
import { FaMoneyBill } from "react-icons/fa";

function App() {

  return (
    <main>
      <Button onClick={() => console.log("...logging in")}>
        <FaMoneyBill />
        Click Here
      </Button>
    </main>
  );
}

export default App;
