import { useTheme } from "../ThemeContext";
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

const REGISTRATIONS_OPEN = import.meta.env.VITE_REGISTRATIONS_OPEN === "true";
const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";

const MANUALS = {
  student: {
    title: "Student's Manual",
    dark: STUDENT_MANUAL_DARK,
    light: STUDENT_MANUAL_LIGHT,
  },
  mentor: {
    title: "Mentor's Manual",
    dark: MENTOR_MANUAL_DARK,
    light: MENTOR_MANUAL_LIGHT,
  },
} as const;

function HeroSection() {
  const auth = useAuthContext();
  const { theme } = useTheme();

  const handleLogin = (userType: string) => {
    auth.setUserType(userType as UserType);
    window.location.href = GITHUB_OAUTH_URL;
  };

  return (
    <div className="hero">
      <div className="quote">"A winter worth committing to."</div>
      <div className="title">
        Kharagpur{" "}
        <span className="highlight">
          Winter <br /> of Code
        </span>{" "}
        2026
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
        {Object.values(MANUALS).map((manual) => (
          <a key={manual.title} className="manual-link"
            href={theme === "day" ? manual.light : manual.dark}
            target="_blank" rel="noreferrer">
            {manual.title}
          </a>
        ))}
      </div>

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
