import "./Menu.css";
import useToggle from "../../hooks/useToggle";

export default function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle();
  return <div className="menu">{children}</div>;
}
