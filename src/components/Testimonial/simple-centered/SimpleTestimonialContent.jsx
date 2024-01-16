import classNames from "classnames";
import PropTypes from "prop-types";

import "./SimpleTestimonial.css";

function SimpleTestimonialContent({ children, className }) {
  const allClasses = classNames("simple-testimonial content", className);
  return <div className={allClasses}>{children}</div>;
}

export default SimpleTestimonialContent;
