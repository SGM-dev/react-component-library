import classNames from "classnames";
import PropTypes from "prop-types";

import "./SimpleTestimonial.css"

function SimpleTestimonial({ children, className }) {
  const allClasses = classNames("simple-testimonial container", className);
  return <div className={allClasses}>{children}</div>;
}

export default SimpleTestimonial;
