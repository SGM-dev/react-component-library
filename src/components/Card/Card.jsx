import "./Card.css";
import PropTypes from "prop-types";

export default function Card({ children }) {
  return <div className="card-container">{children}</div>;
}
