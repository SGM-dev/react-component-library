import classNames from "classnames";
import { TooltipContext } from "./Tooltip";
import { useContext } from "react";

export default function TooltipAction({ children, className }) {
  const { variant, colorScheme, toggleOpen } = useContext(TooltipContext);
  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    "tooltip-action"
  );

  return (
    <div className={allClasses} onClick={toggleOpen}>
      {children}
    </div>
  );
}
