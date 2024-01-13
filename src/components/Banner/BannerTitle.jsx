import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function BannerTitle({ children }) {
  return <h2 className="banner-title">{children}</h2>;
}
