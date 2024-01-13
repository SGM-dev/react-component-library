import "./Banner.css";
import PropTypes from "prop-types";

function BannerText({ children }) {
  return <p className="banner-text">{children}</p>;
}

BannerText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BannerText;
