import "./App.css";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";

function App() {
  return (
    <main>
      <Menu>
        <MenuButton buttonText="Sports" />
        <MenuDropdown
          items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
        />
      </Menu>
    </main>
  );
}

export default App;
