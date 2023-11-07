export default function MenuItem({ children }) {
  return (
    <div className="menu-item" key={children}>
      {children}
    </div>
  );
}
