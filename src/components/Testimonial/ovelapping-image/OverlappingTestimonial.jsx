import classNames from "classnames";
import PropTypes from "prop-types";

import "./OverlappingTestimonial.css";

function OverlappingTestimonial({ children, className }) {
  const allClasses = classNames("overlapping-testimonial container", className);
  return <div className={allClasses}>{children}</div>;
}

export default OverlappingTestimonial;
