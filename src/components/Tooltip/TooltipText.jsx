import classNames from "classnames";
import { TooltipContext } from "./Tooltip";
import { useContext } from "react";

export default function TooltipText({ children, className }) {
  const { variant, colorScheme } = useContext(TooltipContext);
  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    "tooltip-text"
  );

  return <p className={allClasses}>{children}</p>;
}
