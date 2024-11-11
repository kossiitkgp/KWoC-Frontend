import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h2>Social Groups</h2>
                        <p><a href="">Discord</a></p>
                        <p><a href="">Slack</a></p>
                        <p><a href="https://www.linkedin.com/company/kharagpur-open-source-society/mycompany/">LinkedIn</a></p>
                        <p><a href="https://x.com/kossiitkgp">Twitter</a></p>
                    </div>
                    <div className="footer-column">
                        <h2>Quick Links</h2>
                        <p><a href="">Timeline</a></p>
                        <p><a href="">FAQs</a></p>
                        <p><a href="">About KWoC</a></p>
                    </div>
                    <div className="footer-column">
                        <h2>Other</h2>
                        <p><a href="">About KOSS</a></p>
                        <p><a href="">Past Programs</a></p>
                        <p><a href="">contact@kossiitkgp.org</a></p>
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