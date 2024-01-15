import "./Card.css";
import classNames from "classnames";

export default function CardIcon({ children, className, ...rest }) {
  const allClasses = classNames("card-icon", className);

  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
