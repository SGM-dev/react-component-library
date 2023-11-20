import "./Badge.css";
import classNames from "classnames";

export default function Badge({
  children,
  color,
  variant,
  className,
  ...rest
}) {
  const colorClass = color && `badge-${color}`;
  const variantClass = variant && `badge-${variant}`;

  return (
    <div className={`badge ${colorClass} ${variantClass}`}>{children}</div>
  );
}
