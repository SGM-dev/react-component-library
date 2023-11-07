import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import { useState } from "react";

import "./Menu.css";

export default function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return <div className="menu">{children}</div>;
}
