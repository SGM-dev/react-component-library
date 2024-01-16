import classNames from "classnames";
import PropTypes from "prop-types";

function OverlappingTestimonialCitation({ children, className }) {
  const allClasses = classNames("overlapping-testimonial citation", className);

  return <div className={allClasses}>{children}</div>;
}

export default OverlappingTestimonialCitation;
