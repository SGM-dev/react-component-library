import classNames from "classnames";
import PropTypes from "prop-types";

function SimpleTestimonialAuthor({ children, className }) {
  const allClasses = classNames("simple-testimonial author", className);

  return <p className={allClasses}>{children}</p>;
}

export default SimpleTestimonialAuthor;
