import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import React, { useState, createContext } from "react";

import "./Menu.css";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={false}>
      <div className="menu">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            open,
            toggle,
          });
        })}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
