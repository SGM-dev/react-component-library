import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Banner({ children, variant }) {
  let icon;

  switch (variant) {
    case "success":
      icon = <FontAwesomeIcon icon={faCircleCheck} />;
      break;

    case "warning":
      icon = <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />;
      break;

    case "error":
      icon = <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />;
      break;

    case "neutral":
      icon = <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" />;
      break;
  }

  return (
    <div className={`banner ${variant}`}>
      {icon}
      <div className="banner-content">{children}</div>
    </div>
  );
}
