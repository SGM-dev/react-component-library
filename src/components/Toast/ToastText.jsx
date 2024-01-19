import classNames from "classnames";
import { ToastContext } from "./Toast";
import { useContext } from "react";

export default function ToastText({ children, className, ...rest }) {
  const { variant } = useContext(ToastContext);
  const allClasses = classNames(variant, className, "toast-title");

  return (
    <p className={allClasses} {...rest}>
      {children}
    </p>
  );
}
