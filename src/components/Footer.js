import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h1>Kharagpur Winter of Code</h1>
        <h2>
          <a href="https://kossiitkgp.org">With &#10084; by KOSS</a>
        </h2>
      </div>

      <div>
        <a href="/#tline">Timeline</a>
        <a href="https://www.facebook.com/groups/kwoc2016">Social Groups</a>
      </div>

      <div>
        <a href="/FAQ">FAQ</a>
        <a href="/#about">About KOSS</a>
      </div>

      <div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/kossiitkgp/kwoc-bugs"
        >
          Report a Bug!
        </a>
      </div>
    </div>
  );
}
