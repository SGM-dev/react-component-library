import { IoPersonSharp } from "react-icons/io5";
import "./Avatar.css";
import classNames from "classnames";

export default function Avatar({ children, src, alt, ...rest }) {
  const avatarClass = !src && (children ? "avatar-letters" : "avatar-icon");

  const allClasses = classNames("avatar", avatarClass);

  return <div className={allClasses}></div>;
}
