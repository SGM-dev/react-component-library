import classNames from "classnames";
import PropTypes from "prop-types";

function SimpleTestimonialRole({ children, className }) {
  const allClasses = classNames("simple-testimonial role", className);

  return <p className={allClasses}>{children}</p>;
}

export default SimpleTestimonialRole;
