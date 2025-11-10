import { Link } from "react-router-dom";
import "../styles/button.css";

function Button({
  children,
  icon,
  to,
  onClick,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  to?: string;
  onClick?: () => void;
}) {
  const btn = (
    <button
      className={["block-btn", icon && "icon"].filter((x) => x).join(" ")}
      onClick={onClick}
    >
      <div className="btn-text">{children}</div> {icon}
    </button>
  );

  if (to) {
    return <Link to={to}>{btn}</Link>;
  }

  return btn;
}

export default Button;
