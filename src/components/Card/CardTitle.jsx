import "./Card.css";
import classNames from "classnames";

export default function CardTitle({ children, className, ...rest }) {
  const allClasses = classNames("card-title", className);

  return (
    <h2 className={allClasses} {...rest}>
      {children}
    </h2>
  );
}
