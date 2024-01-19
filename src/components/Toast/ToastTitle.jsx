import classNames from "classnames";
import { ToastContext } from "./Toast";
import { useContext } from "react";

export default function ToastTitle({ children, className, ...rest }) {
  const { variant } = useContext(ToastContext);
  const allClasses = classNames(variant, className, "toast-title");

  return (
    <h3 className={allClasses} {...rest}>
      {children}
    </h3>
  );
}
