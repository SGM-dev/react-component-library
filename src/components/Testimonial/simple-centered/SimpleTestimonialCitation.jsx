import classNames from "classnames";
import PropTypes from "prop-types";

function SimpleTestimonialCitation({ children, className }) {
  const allClasses = classNames("simple-testimonial citation", className);

  return <div className={allClasses}>{children}</div>;
}

export default SimpleTestimonialCitation;
