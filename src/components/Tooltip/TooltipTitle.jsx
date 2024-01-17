import classNames from "classnames";
import { TooltipContext } from "./Tooltip";
import { useContext } from "react";

export default function TooltipTitle({ children, className }) {
  const { variant, colorScheme } = useContext(TooltipContext);
  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    "tooltip-title"
  );

  return <h3 className={allClasses}>{children}</h3>;
}
