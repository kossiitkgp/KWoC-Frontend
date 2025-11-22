import { Link } from "react-router-dom";
import "../styles/footer.css";
import { DISCORD_INVITE } from "../util/constants";

function Footer() {
  return (
    <div className="footer">
      <div className="link-content">
        <div className="section">
          <div className="section-title">Social Groups</div>
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
          <div className="section-title">Quick Links</div>
          <div className="links">
            <a href="/#timeline">Timeline</a>
            <Link to="/faq">FAQs</Link>
            <a href="/#about">About KWoC</a>
          </div>
        </div>
        <div className="section">
          <div className="section-title">Other</div>
          <div className="links">
            <a href="https://kossiitkgp.org" target="_blank" rel="noreferrer">
              About KOSS
            </a>
            {/* <div>Past Programs</div> */}
            <a href="mailto:contact@kossiitkgp.org">contact@kossiitkgp.org</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="kwoc">Kharagpur Winter of Code</div>
        <div className="koss">With ♥ by KOSS</div>
      </div>
    </div>
  );
}

export default Footer;
