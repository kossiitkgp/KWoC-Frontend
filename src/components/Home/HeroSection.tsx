import Button from "../Button";
import "../../styles/Home/hero.css";
import { useAuthContext } from "../../util/auth";
import { GITHUB_OAUTH_URL } from "../../util/constants";

function HeroSection() {
  const auth = useAuthContext();

  const handleLogin = () => {
    window.location.href = GITHUB_OAUTH_URL;
  }

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
          <Button to={auth.isRegistered ? "/dashboard" : "/form"}>
            Go to Dashboard
          </Button>
        ) : (
          <>
            <Button onClick={handleLogin}>Student Login</Button>
            <Button onClick={handleLogin}>Mentor Login</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
