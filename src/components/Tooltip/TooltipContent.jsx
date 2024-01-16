import classNames from "classnames";

export default function TooltipContent({ children, className }) {
  const allClasses = classNames(className, "tooltip-content");

  return (
    <div className={allClasses}>
      {children}
      <div className="triangle-down"></div>
    </div>
  );
}
