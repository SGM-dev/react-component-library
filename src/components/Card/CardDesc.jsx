import "./Card.css";
import PropTypes from "prop-types";

export default function CardDesc({ children }) {
  return <p className="card-description">{children}</p>;
}
