import "./Button.css";
import classNames from "classnames";

export default function Button({
  children,
  size,
  variant,
  className,
  ...rest
}) {
  const sizeClass = size ? `button-${size}` : "";
  const variantClass = variant ? `button-${variant}` : "";

  const allClasses = classNames(sizeClass, variantClass, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
