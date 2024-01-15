import "./Card.css";
import classNames from "classnames";
import PropTypes from "prop-types";

function CardDesc({ children, className, ...rest }) {
  const allClasses = classNames("card-description", className);

  return (
    <p className={allClasses} {...rest}>
      {children}
    </p>
  );
}

CardDesc.propTypes = { children: PropTypes.node, className: PropTypes.string };

export default CardDesc;
