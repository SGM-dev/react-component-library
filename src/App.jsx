import "./App.css";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";

function App() {
  return (
    <main>
      <section>
        {" "}
        <Button
          size="sm"
          variant="warning"
          onClick={() => console.log("...logging in")}
        >
          Click Here
        </Button>
      </section>
      <section>
        <Avatar src="./sam.jpeg" alt="Sam George Mathew" />
        <br />
        <Avatar>BZ</Avatar>
        <br />
        <Avatar />
      </section>
    </main>
  );
}

export default App;
