import classNames from "classnames";
import { createContext, useRef, useState } from "react";
import "./Toast.css";
import useTimeout from "../../hooks/useTimeout";

const ToastContext = createContext();

export default function Toast({
  children,
  variant,
  className,
  delay,
  ...rest
}) {
  let isHidden = false;
  useTimeout(() => (isHidden = true), delay);

  let hiddenClass = isHidden ? "hidden" : "";

  let allClasses = classNames(
    variant,
    className,
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
