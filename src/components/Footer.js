import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column">
						<h1>Kharagpur Winter of Code</h1>
						<h2>With &#10084; by KOSS</h2>
					</div>
					<div className="column"></div>
					<div className="column">
						<Link to="/manuals">
							<strong>Manuals</strong>
						</Link>
						<Link to="/manual-student">Student Manual</Link>
						<Link to="/manual-mentor">Mentor Manual</Link>
					</div>
					<div className="column">
						<Link to="/docs">Timeline</Link>
						<Link to="/docs">Social Groups</Link>
						<Link to="/FAQ">FAQ</Link>
						<Link to="/docs">About KOSS</Link>
					</div>
					<div className="column">
						<Link to="/docs">Privacy</Link>
						<Link to="/docs">Legal</Link>
						<Link to="/docs">Illegal</Link>
						<Link to="/docs">Grey</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
