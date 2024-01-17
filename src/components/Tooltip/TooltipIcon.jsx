import classNames from "classnames";
import { TooltipContext } from "./Tooltip";
import { useContext } from "react";

export default function TooltipIcon({ children, className }) {
  const { variant, colorScheme } = useContext(TooltipContext);
  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    "tooltip-icon"
  );

  return <div className={allClasses}>{children}</div>;
}
