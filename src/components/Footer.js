import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer-btm">
      <footer>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1>Kharagpur Winter of Code</h1>
              <h2>
                <a href="https://kossiitkgp.org">With &#10084; by KOSS</a>
              </h2>
            </div>
            <div className="column">
              <a href="/#tline">Timeline</a>
              <a href="https://www.facebook.com/groups/kwoc2016">
                Social Groups
              </a>
            </div>
            <div className="column">
              <Link to="/FAQ">FAQ</Link>
              <a href="/#about">About KOSS</a>
            </div>
            <div className="column">
              <h2>Found a glitch?</h2>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kossiitkgp/kwoc-bugs"
              >
                Report a Bug!
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
