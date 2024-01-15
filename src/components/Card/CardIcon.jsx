import "./Card.css";
import classNames from "classnames";
import PropTypes from "prop-types";

function CardIcon({ children, className, ...rest }) {
  const allClasses = classNames("card-icon", className);

  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = { children: PropTypes.node, className: PropTypes.string };

export default CardIcon;
