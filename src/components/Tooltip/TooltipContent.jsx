import classNames from "classnames";
import { TooltipContext } from "./Tooltip";
import { useContext } from "react";

export default function TooltipContent({ children, className }) {
  const { variant, colorScheme } = useContext(TooltipContext);

  const allClasses = classNames(className, variant, colorScheme, "");

  return (
    <div className={`${allClasses} tooltip-content`}>
      {children}
      <div className={`${allClasses} triangle-down`}></div>
    </div>
  );
}
