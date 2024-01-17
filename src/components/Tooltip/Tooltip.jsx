import classNames from "classnames";
import "./Tooltip.css";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

const TooltipContext = createContext();

export default function Tooltip({
  children,
  className,
  variant,
  colorScheme,
  onOpen,
  ...rest
}) {
  const [open, toggleOpen] = useToggle({});

  const hiddenClass = open ? "hidden" : "";

  const allClasses = classNames(
    className,
    variant,
    colorScheme,
    hiddenClass,
    "tooltip-container"
  );

  return (
    <TooltipContext.Provider
      value={{ variant, colorScheme, open: true, toggleOpen }}
    >
      <div className={allClasses} {...rest}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

export { TooltipContext };
