import classNames from "classnames";
import PropTypes from "prop-types";

import "./OverlappingTestimonial.css";

function OverlappingTestimonialContent({ children, className }) {
  const allClasses = classNames("overlapping-testimonial content", className);
  return (
    <div className={allClasses}>
      <img src="src\assets\quote-icon.svg" />
      {children}
    </div>
  );
}

export default OverlappingTestimonialContent;
