import "./Card.css";
import classNames from "classnames";
import { useRef } from "react";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHook";

function Card({ children, className, onHover, onLeave, ...rest }) {
  const elementRef = useRef();

  const isHovered = useHover({
    ref: elementRef,
    onHover,
    onLeave,
  });

  const hoverClass = isHovered ? "shadow" : "";

  const allClasses = classNames("card-container", hoverClass, className);

  return (
    <div className={allClasses} {...rest} ref={elementRef}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

export default Card;
