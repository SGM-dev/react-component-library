import "./App.css";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";
import Menu from "./components/Menu/index";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => (
            <Menu.Item>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </main>
  );
}

export default App;
