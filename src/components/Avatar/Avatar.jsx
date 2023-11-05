import { IoPersonSharp } from "react-icons/io5";
import "./Avatar.css";
import classNames from "classnames";

export default function Avatar({ children, src, ...rest }) {
  const colors = ["navy", "pink", "red", "blue", "green"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const avatarClass = !src && (children ? "avatar-letters" : "avatar-icon");

  const allClasses = classNames("avatar", avatarClass, !src && randomColor);

  const content = src ? (
    <img src={src} {...rest}></img>
  ) : children ? (
    <h2>{children}</h2>
  ) : (
    <IoPersonSharp />
  );

  return <div className={allClasses}>{content}</div>;
}
