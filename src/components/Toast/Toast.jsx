import classNames from "classnames";
import { createContext } from "react";
import "./Toast.css";

const ToastContext = createContext();

export default function Toast({ children, variant, className, ...rest }) {
  const allClasses = classNames(variant, className, "toast-container");

  return (
    <ToastContext.Provider value={{ variant }}>
      <div className={allClasses} {...rest}>
        {children}
      </div>
    </ToastContext.Provider>
  );
}

export { ToastContext };
