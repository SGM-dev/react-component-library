import classNames from "classnames";
import { createContext, useRef, useState } from "react";
import "./Toast.css";
import useTimeout from "../../hooks/useTimeout";

const ToastContext = createContext();

export default function Toast({
  children,
  variant,
  className,
  position,
  delay,
  ...rest
}) {
  let initialRender = useRef(true);
  const [isHidden, setIsHidden] = useState(false);

  const hideToast = () => {
    if (initialRender) {
      initialRender.current = false;
      setIsHidden(true);
    }
  };

  useTimeout(hideToast, delay);

  let hiddenClass = isHidden ? "hidden" : "";

  let allClasses = classNames(
    variant,
    className,
    position,
    hiddenClass,
    "toast-container"
  );

  return (
    <ToastContext.Provider value={{ variant }}>
      <div className={allClasses} {...rest}>
        {children}
      </div>
    </ToastContext.Provider>
  );
}

export { ToastContext };
