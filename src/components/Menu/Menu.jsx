import "./Menu.css";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

const MenuContext = createContext();

export default function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle();
  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
