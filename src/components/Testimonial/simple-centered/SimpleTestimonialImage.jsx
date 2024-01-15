import classNames from "classnames";
import PropTypes from "prop-types";

function SimpleTestimonialImage({ src, className }) {
  const allClasses = classNames("simple-testimonial image", className);

  return <img className={allClasses} src={src} />;
}

export default SimpleTestimonialImage;
