import "./Button.css";

export default function Button({ children, size, ...rest }) {
  const sizeClass =
    (size === "sm" && "button-small") || (size === "lg" && "button-large");

  return (
    <button className={sizeClass} {...rest}>
      {children}
    </button>
  );
}
