import classNames from "classnames";
import PropTypes from "prop-types";

function SimpleTestimonialQuote({ children, className }) {
  const allClasses = classNames("simple-testimonial quote", className);

  return <p className={allClasses}>{children}</p>;
}

export default SimpleTestimonialQuote;
