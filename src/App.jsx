import "./App.css";
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star " />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </main>
  );
}

export default App;
