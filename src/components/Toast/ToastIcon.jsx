import { useContext } from "react";
import classNames from "classnames";
import { ToastContext } from "./Toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function ToastIcon({ className, ...rest }) {
  const { variant } = useContext(ToastContext);
  const allClasses = classNames(variant, className, "toast-icon");

  let icon;

  switch (variant) {
    case "success":
      icon = (
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={allClasses}
          {...rest}
        />
      );
      break;
    case "warning":
      icon = (
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className={allClasses}
          {...rest}
        />
      );
      break;
    case "info":
      icon = (
        <FontAwesomeIcon icon={faCircleInfo} className={allClasses} {...rest} />
      );
      break;
    case "error":
      icon = (
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={allClasses}
          {...rest}
        />
      );
      break;
    default:
      icon = (
        <FontAwesomeIcon icon={faCircleInfo} className={allClasses} {...rest} />
      );
      break;
  }

  return icon;
}
