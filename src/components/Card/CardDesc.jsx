import "./Card.css";
import classNames from "classnames";

export default function CardDesc({ children, className, ...rest }) {
  const allClasses = classNames("card-description", className);
  
  return (
    <p className={allClasses} {...rest}>
      {children}
    </p>
  );
}
