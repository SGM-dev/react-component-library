import classNames from "classnames";

export default function TooltipText({ children, className }) {
  const allClasses = classNames(className, "tooltip-text");

  return <p className={allClasses}>{children}</p>;
}
