import "./Banner.css";
import PropTypes from "prop-types";

function BannerTitle({ children }) {
  return <h2 className="banner-title">{children}</h2>;
}

BannerTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BannerTitle;
