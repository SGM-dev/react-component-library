import "./Button.css";
import classNames from "classnames";

export default function Button({ children, size, className, ...rest }) {
  const sizeClass = size ? `button-${size}` : "";

  const allClasses = classNames(sizeClass, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
