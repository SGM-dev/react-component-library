import "./Card.css";
import PropTypes from "prop-types";

export default function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}
