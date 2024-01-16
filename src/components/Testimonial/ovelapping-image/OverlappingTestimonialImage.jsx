import classNames from "classnames";
import PropTypes from "prop-types";

function OverlappingTestimonialImage({ src, className }) {
  const allClasses = classNames("overlapping-testimonial image", className);

  return <img className={allClasses} src={src} />;
}

export default OverlappingTestimonialImage;
