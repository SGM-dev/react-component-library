import classNames from "classnames";
import "./Tooltip.css"

export default function Tooltip({ children, className, variant, colorScheme }) {
  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    "tooltip-container"
  );

  return <div className={allClasses}>{children}</div>;
}
