import "./App.css";
import Toggle from "./components/Toggle/index";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <main>
      <Star />
      <br />
      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Sports</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              {sports.map((sport) => (
                <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </main>
  );
}

export default App;
