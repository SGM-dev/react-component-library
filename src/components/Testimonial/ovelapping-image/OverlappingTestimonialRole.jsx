import classNames from "classnames";
import PropTypes from "prop-types";

function OverlappingTestimonialRole({ children, className }) {
  const allClasses = classNames("overlapping-testimonial role", className);

  return <p className={allClasses}>{children}</p>;
}

export default OverlappingTestimonialRole;
