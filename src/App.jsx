import "./App.css";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.map((sport) => (
            <MenuItem>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    </main>
  );
}

export default App;
