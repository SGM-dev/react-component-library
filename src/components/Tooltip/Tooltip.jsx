import classNames from "classnames";
import "./Tooltip.css";
import { createContext } from "react";

const TooltipContext = createContext();

export default function Tooltip({
  children,
  className,
  variant,
  colorScheme,
  ...rest
}) {
  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    "tooltip-container"
  );

  return (
    <TooltipContext.Provider value={{ variant, colorScheme }}>
      <div className={allClasses} {...rest}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

export { TooltipContext };
