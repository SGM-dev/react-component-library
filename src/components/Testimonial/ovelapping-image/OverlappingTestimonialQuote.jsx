import classNames from "classnames";
import PropTypes from "prop-types";

function OverlappingTestimonialQuote({ children, className }) {
  const allClasses = classNames("overlapping-testimonial quote", className);

  return <p className={allClasses}>{children}</p>;
}

export default OverlappingTestimonialQuote;
