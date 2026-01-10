import Button from "../Button";
import "../../styles/Home/hero.css";
import { useAuthContext } from "../../util/auth";
import {
  DISCORD_INVITE,
  MENTOR_MANUAL,
  STUDENT_MANUAL,
} from "../../util/constants";

const REGISTRATIONS_OPEN = import.meta.env.VITE_REGISTRATIONS_OPEN === "true";
const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";

function HeroSection() {
  const auth = useAuthContext();

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
                  auth.handleOAuthLogin("student");
                }}
              >
                Student Sign-up
              </Button>
            )}
            {(REGISTRATIONS_OPEN || MENTOR_REG_OPEN) && (
              <Button
                onClick={() => {
                  auth.handleOAuthLogin("mentor");
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
        <a href={STUDENT_MANUAL} target="_blank" rel="noreferrer">
          Student Manual
        </a>
        <a href={MENTOR_MANUAL} target="_blank" rel="noreferrer">
          Mentor Manual
        </a>
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
