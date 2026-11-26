import { useEffect, useState } from "react";
import Button from "../Button";
import "../../styles/Home/hero.css";
import { useAuthContext } from "../../util/auth";
import {
  DISCORD_INVITE,
  GITHUB_OAUTH_URL,
  MENTOR_MANUAL_DARK,
  MENTOR_MANUAL_LIGHT,
  STUDENT_MANUAL_DARK,
  STUDENT_MANUAL_LIGHT,
} from "../../util/constants";
import { UserType } from "../../util/types";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

const REGISTRATIONS_OPEN = import.meta.env.VITE_REGISTRATIONS_OPEN === "true";
const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";

const MANUALS = {
  student: {
    title: "Student Manual",
    dark: STUDENT_MANUAL_DARK,
    light: STUDENT_MANUAL_LIGHT,
  },
  mentor: {
    title: "Mentor Manual",
    dark: MENTOR_MANUAL_DARK,
    light: MENTOR_MANUAL_LIGHT,
  },
} as const;

type ManualRole = keyof typeof MANUALS;

function HeroSection() {
  const auth = useAuthContext();
  const [selectedManual, setSelectedManual] = useState<ManualRole | null>(null);

  useEffect(() => {
    if (!selectedManual) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedManual(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedManual]);

  const handleLogin = (userType: string) => {
    auth.setUserType(userType as UserType);
    window.location.href = GITHUB_OAUTH_URL;
  };

  const activeManual = selectedManual ? MANUALS[selectedManual] : null;

  return (
    <div className="hero">
      <div className="quote">"For the love of open source"</div>
      <div className="title">
        Kharagpur{" "}
        <span className="highlight">
          Winter <br /> of Code
        </span>{" "}
        2025
      </div>

      <div className="actions">
        {auth.isAuthenticated ? (
          <Button to={auth.isRegistered ? auth.dashboardLink : auth.formLink}>
            Go to Dashboard
          </Button>
        ) : (
          <>
            {REGISTRATIONS_OPEN && (
              <Button
                onClick={() => {
                  handleLogin("student");
                }}
              >
                Student Sign-up
              </Button>
            )}
            {(REGISTRATIONS_OPEN || MENTOR_REG_OPEN) && (
              <Button
                onClick={() => {
                  handleLogin("mentor");
                }}
              >
                Mentor Sign-up
              </Button>
            )}
          </>
        )}
      </div>

      {/* manual links */}
      <div className="manual-links">
        {(Object.keys(MANUALS) as ManualRole[]).map((role) => (
          <button
            key={role}
            type="button"
            className="manual-link"
            onClick={() => setSelectedManual(role)}
          >
            {MANUALS[role].title}
          </button>
        ))}
      </div>

      {activeManual && (
        <div
          className="manual-modal-backdrop"
          onClick={() => setSelectedManual(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="manual-modal-title"
        >
          <div className="manual-modal" onClick={(e) => e.stopPropagation()}>
            <div className="manual-modal-header">
              <h3 id="manual-modal-title">{activeManual.title}</h3>
              <button
                type="button"
                className="manual-modal-close"
                onClick={() => setSelectedManual(null)}
                aria-label="Close manual theme selector"
              >
                ×
              </button>
            </div>
            <p className="manual-modal-subtitle">
              Choose the theme you'd like to read the manual in:
            </p>
            <div className="manual-theme-options">
              {(
                [
                  {
                    key: "dark",
                    label: "Dark Theme",
                    href: activeManual.dark,
                    icon: moonIcon,
                  },
                  {
                    key: "light",
                    label: "Light Theme",
                    href: activeManual.light,
                    icon: sunIcon,
                  },
                ] as const
              ).map((option) => (
                <a
                  key={option.key}
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`manual-theme-option ${option.key}`}
                  onClick={() => setSelectedManual(null)}
                >
                  <span
                    className="manual-theme-icon"
                    aria-hidden="true"
                    style={{
                      WebkitMaskImage: `url(${option.icon})`,
                      maskImage: `url(${option.icon})`,
                    }}
                  />
                  <span>{option.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* discord */}
      <div className="discord">
        <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/1965106?v=4"
            alt="discord"
          />
          Join our Discord server
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
