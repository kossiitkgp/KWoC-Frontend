import { Link } from "react-router-dom";
import "../styles/button.css";

function Button({
  children,
  icon,
  to,
  className,
  type = "button",
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  to?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const btn = (
    <button
      className={["block-btn", icon && "icon", className].filter((x) => x).join(" ")}
      onClick={onClick}
      type={type}
      disabled={disabled}
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
