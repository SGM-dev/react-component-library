import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faTriangleExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Banner({ children, variant }) {
  let icon;

  switch (variant) {
    case "success":
      icon = <FontAwesomeIcon icon={faCircleCheck} />;
      break;

    case "warning":
      icon = <FontAwesomeIcon icon={faTriangleExclamation} />;
      break;

    case "error":
      icon = <FontAwesomeIcon icon={faCircleXmark} />;
      break;

    case "neutral":
      icon = <FontAwesomeIcon icon={faCircleExclamation} />;
      break;
  }

  return (
    <div className={`banner ${variant}`}>
      {icon}
      <div className="banner-content">{children}</div>
    </div>
  );
}
