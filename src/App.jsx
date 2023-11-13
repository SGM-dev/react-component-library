import "./App.css";
import Toggle from "./components/Toggle/index";

function App() {
  return (
    <main>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => <div className={`box ${on ? "filled" : ""}`}></div>}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </main>
  );
}

// <Star />

// <br />

// <Menu>
//   <Menu.Button>Menu</Menu.Button>
//   <Menu.Dropdown>
//     <Menu.Item>Home</Menu.Item>
//     <Menu.Item>About</Menu.Item>
//     <Menu.Item>Contact</Menu.Item>
//     <Menu.Item>Blog</Menu.Item>
//   </Menu.Dropdown>
// </Menu>

export default App;
