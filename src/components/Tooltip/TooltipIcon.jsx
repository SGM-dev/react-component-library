import classNames from "classnames";

export default function TooltipIcon({ children, className }) {
  const allClasses = classNames(className, "tooltip-icon");

  return <div className={allClasses}>{children}</div>;
}
