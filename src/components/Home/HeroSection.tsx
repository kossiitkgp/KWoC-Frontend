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


const generateOAuthState = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

function HeroSection(): JSX.Element {
  const auth = useAuthContext();

  const handleLogin = (userType: string) => {
    auth.setUserType(userType as UserType);
    
   
    const state = generateOAuthState();
    sessionStorage.setItem("oauth_state", state);
    
    
    const url = new URL(GITHUB_OAUTH_URL);
    url.searchParams.append("state", state);
    window.location.href = url.toString();
  };

  return (
    <div className="hero" role="main">
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
          <Button to={auth.isRegistered ? auth.dashboardLink : auth.formLink}
                  aria-label="Go to your dashboard">
            Go to Dashboard
          </Button>
        ) : (
          <>
            {REGISTRATIONS_OPEN && (
              <Button
                onClick={() => handleLogin("student")}
                aria-label="Sign up as KWoC student"
              >
                Student Sign-up
              </Button>
            )}
            {(REGISTRATIONS_OPEN || MENTOR_REG_OPEN) && (
              <Button
                onClick={() => handleLogin("mentor")}
                aria-label="Sign up as KWoC mentor"
              >
                Mentor Sign-up
              </Button>
            )}
          </>
        )}
      </div>

      {/* manual links */}
      <div className="manual-links">
        <a href={STUDENT_MANUAL} target="_blank" rel="noreferrer"
           aria-label="Download KWoC Student Manual (PDF)">
          Student Manual
        </a>
        <a href={MENTOR_MANUAL} target="_blank" rel="noreferrer"
           aria-label="Download KWoC Mentor Manual (PDF)">
          Mentor Manual
        </a>
      </div>

      {/* discord */}
      <div className="discord">
        <a href={DISCORD_INVITE} target="_blank" rel="noreferrer"
           aria-label="Join KWoC Discord server (opens new tab)">
          <img
            src="https://avatars.githubusercontent.com/u/1965106?v=4"
            alt="Discord server"
          />
          Join our Discord server
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
