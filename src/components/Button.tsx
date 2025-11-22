import { Link } from "react-router-dom";
import "../styles/button.css";

function Button({
  children,
  icon,
  to,
  className,
  type = "button",
  disabled = false,
  variant = "",
  onClick,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  to?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const btn = (
    <button
      className={["block-btn", icon && "icon", to ? "" : className, variant]
        .filter((x) => x)
        .join(" ")}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className="btn-text">{children}</div> {icon}
    </button>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {btn}
      </Link>
    );
  }

  return btn;
}

export default Button;
