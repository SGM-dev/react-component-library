import "./Card.css";
import classNames from "classnames";
import PropTypes from "prop-types";

function CardTitle({ children, className, ...rest }) {
  const allClasses = classNames("card-title", className);

  return (
    <h2 className={allClasses} {...rest}>
      {children}
    </h2>
  );
}

CardTitle.propTypes = { children: PropTypes.node, className: PropTypes.string };

export default CardTitle;
