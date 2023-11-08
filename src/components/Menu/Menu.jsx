import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import React, { useState } from "react";

import "./Menu.css";

export default function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          open,
          toggle,
        });
      })}
    </div>
  );
}
