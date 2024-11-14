import "../styles/Footer.css";
import { ROUTER_PATHS, DISCORD_INVITE, KOSS_CONTACT_EMAIL, KOSS_LINKEDIN_URL, KOSS_TWITTER_URL, KOSS_WEBSITE_URL } from "../util/constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h2>Social Groups</h2>
                        <p><a href={DISCORD_INVITE}>Discord</a></p>
                        <p><a href={KOSS_LINKEDIN_URL}>LinkedIn</a></p>
                        <p><a href={KOSS_TWITTER_URL}>Twitter</a></p>
                    </div>
                    <div className="footer-column">
                        <h2>Quick Links</h2>
                        <p><a href={`${ROUTER_PATHS.HOME}#timeline`}>Timeline</a></p>
                        <p><a href={ROUTER_PATHS.FAQ}>FAQs</a></p>
                        <p><a href={`${ROUTER_PATHS.HOME}#about`}>About KWoC</a></p>
                    </div>
                    <div className="footer-column">
                        <h2>Other</h2>
                        <p><a href={KOSS_WEBSITE_URL}>About KOSS</a></p>
                        <p><a href="https://kwoc23.kossiitkgp.org/">Past Programs</a></p>
                        <p><a href={KOSS_CONTACT_EMAIL}>contact@kossiitkgp.org</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h1>Kharagpur Winter of Code</h1>
                <p>With 💙 by KOSS</p>
            </div>
        </footer>
    );
};

export default Footer