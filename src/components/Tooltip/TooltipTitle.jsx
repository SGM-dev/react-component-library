import classNames from "classnames";

export default function TooltipTitle({ children, className }) {
  const allClasses = classNames(className, "tooltip-title");

  return <h3 className={allClasses}>{children}</h3>;
}
