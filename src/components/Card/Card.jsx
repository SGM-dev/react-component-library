import "./Card.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Card({ children, className, ...rest }) {
  const allClasses = classNames("card-container", className);

  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
