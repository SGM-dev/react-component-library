import classNames from "classnames";
import { ToastContext } from "./Toast";
import { useContext } from "react";

export default function ToastContent({ children, className, ...rest }) {
  const { variant } = useContext(ToastContext);

  const allClasses = classNames(variant, className, "toast-content");

  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
