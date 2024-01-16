import classNames from "classnames";

export default function TooltipAction({ children, className }) {
  const allClasses = classNames(className, "tooltip-action");

  return <div className={allClasses}>{children}</div>;
}
