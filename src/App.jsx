import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <Card>
        <Card.Icon></Card.Icon>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Desc>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </Card.Desc>
      </Card>
    </main>
  );
}

//<Banner variant={"neutral"}>
//  <Banner.Title>Congratulations!</Banner.Title>
//  <Banner.Text>
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
//    ipsum similique veniam.
//  </Banner.Text>
//</Banner>;

// Using Toggle.Display for the render props
// <Toggle onToggle={() => {console.log("Toggled")}}>
//   <Toggle.Button>
//     <Toggle.Display>
//       {(on) => {
//         return <div className={`box ${on ? "filled" : ""}`}></div>
//       }}
//     </Toggle.Display>
//   </Toggle.Button>
// </Toggle>
// Example using Toggle.On and Toggle.Off to conditionally render items
// <Toggle.On>
//   <div className="box filled"></div>
// </Toggle.On>
// <Toggle.Off>
//   <div className="box"></div>
// </Toggle.Off>

// Simple Star component that uses the Toggle component internally
// <Star />

// <br />

// Menu Component using Toggle component internally to manage
// state and context

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
