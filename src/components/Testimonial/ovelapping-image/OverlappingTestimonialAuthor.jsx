import classNames from "classnames";
import PropTypes from "prop-types";

function OverlappingTestimonialAuthor({ children, className }) {
  const allClasses = classNames("overlapping-testimonial author", className);

  return <p className={allClasses}>{children}</p>;
}

export default OverlappingTestimonialAuthor;
