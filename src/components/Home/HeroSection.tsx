import Button from "../Button";
import "../../styles/Home/hero.css";
import { useAuthContext } from "../../util/auth";
import {
  DISCORD_INVITE,
  GITHUB_OAUTH_URL,
  MENTOR_MANUAL,
  STUDENT_MANUAL,
} from "../../util/constants";
import { UserType } from "../../util/types";

const REGISTRATIONS_OPEN = import.meta.env.VITE_REGISTRATIONS_OPEN === "true";
const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";
// Generate random OAuth state for CSRF protection (#216)
const generateRandomState = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array)).replace(/[^a-zA-Z0-9]/g, '').slice(0, 43);
};


function HeroSection() {
  const auth = useAuthContext();

 const handleLogin = (userType: string) => {
  auth.setUserType(userType as UserType);
  const randomState = generateRandomState();
  const oauthUrl = `${GITHUB_OAUTH_URL}&state=${randomState}`;
  window.location.href = oauthUrl;
};


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
