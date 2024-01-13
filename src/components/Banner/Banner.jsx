import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Banner({ children }) {
  return (
    <div className="banner success">
      <FontAwesomeIcon icon={faCircleCheck} />
      <div className="banner-content">{children}</div>
    </div>
  );
}
