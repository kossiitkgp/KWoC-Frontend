import { Link } from "react-router-dom";
import "../styles/footer.css";
import { DISCORD_INVITE } from "../util/constants";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-hero">
        <div className="footer-wordmark" aria-hidden="true">
          KWoC
        </div>
        <div className="footer-tagline">KHARAGPUR WINTER OF CODE</div>
      </div>

      <div className="footer-divider" />

      <div className="link-content">
        <div className="section">
          <div className="section-title">Socials</div>
          <div className="links">
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">
              Discord
            </a>
            <a
              href="https://www.linkedin.com/company/kharagpur-open-source-society/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/kossiitkgp"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="section">
          <div className="section-title">Quick links</div>
          <div className="links">
            <Link to="/timeline">Timeline</Link>
            <Link to="/faq">FAQs</Link>
            <a href="/#about">About KWoC</a>
          </div>
        </div>
        <div className="section">
          <div className="section-title">Contact</div>
          <div className="links">
            <a href="https://kossiitkgp.org" target="_blank" rel="noreferrer">
              About KOSS
            </a>
            <a href="mailto:contact@kossiitkgp.org">contact@kossiitkgp.org</a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="koss">With ❤️ by KOSS</div>
      </div>
    </footer>
  );
}

export default Footer;
