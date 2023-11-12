import { useState, createContext } from "react";

const ToggleContext = createContext();

export default function Toggle({ children }) {
  const [on, setOn] = useState(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      children
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
