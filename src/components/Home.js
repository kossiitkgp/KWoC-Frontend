import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Timeline from "./timelinedata/Timeline";
import "../styles/timeline.scss";
export default function Home() {
	return (
		<div className="home">
			<Navbar />
			<section className="hero is-fullheight is-primary is-bold">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Welcome to KWoC React</h1>
						<h2 className="subtitle">The truth Redefined</h2>
					</div>
				</div>
			</section>

			<section className="about">
				<div className="container">
					<h1>About</h1>
					<p>
						Kharagpur Winter of Code is a 5-week long online program for
						students who are new to open source software development. The
						program not only helps students to get involved in open source, but
						also prepares them for many open source summer programs; Google
						Summer of Code being one of them.
					</p>
				</div>
			</section>

			<section className="tags">
				<div className="container">
					<h1>Tags</h1>
					<p>
						Machine learning Android Computer Vision Gaming Backend Natural
						Language Processing Scrapping Cognition Front End Deep Learning
						Operating System DBMS OOP Networking Compilers Security Data Mining
						Simulations Artificial Intelligence
					</p>
				</div>
			</section>

			<section className="timeline">
				<div className="container">
					<h1>Kwoc Timeline</h1>
					<Timeline />
				</div>
			</section>

			<section className="why-kwoc">
				<div className="container">
					<h2>Why KWoC?</h2>

					<h3>Intro to Open Source</h3>

					<p>
						KWoC provides a great opportunity to get acquainted with Github
						along with Git commands and contribute to open source efficiently.
						Brush up your coding skills
					</p>

					<p>
						If you love coding and want to learn about software development then
						KWoC helps you to get a glimpse of it and gives you a head start.
					</p>

					<h3>Prepare for GSoC</h3>

					<p>
						With KWoC, you get to know about how to select a project, interact
						with mentors and learn all other things that prepare you in the best
						way for the next GSoC.
					</p>
				</div>
			</section>

			<section className="stats">
				<div className="container">
					<h1>Statistics: KWoC 2017</h1>
					<div className="columns">
						<div className="column">
							<Card
								heading="1850+ Participants"
								img={{
									link: "test.jpg",
									alt: "Image taken from Unplash",
									style: "fluid",
								}}
							/>
						</div>
						<div className="column">
							<Card
								heading="105+ Projects"
								tags={[
									{ value: "ML", type: "primary" },
									{ value: "NLP", type: "primary" },
									{ value: "OS", type: "primary" },
									{ value: "JavaScript & React", type: "primary" },
								]}
							/>
						</div>
						<div className="column">
							<Card heading="70+ Mentors" body="Some Random Body" />
						</div>
					</div>

					<p>
						KWoC 2017 carried forward the legacy set by the 2016 edition; and in
						many ways went past the set milestones. It was staggering
						participation from students, many of them made their first
						contributions to open source during KWoC, and mentors, who saw their
						projects surpass their own expectations by the end of the program.
					</p>
				</div>
			</section>

			<section className="steps">
				<div className="container">
					<h1>Steps</h1>

					<ol>
						<li>
							Apply on the student registration page and wait for an email from
							us (Please check Promotions and Spam as well).
						</li>

						<li>
							Choose project(s) that you want to contribute to, contact the
							assigned mentor(s) and work through December, learning the art of
							software development on the way.
						</li>
					</ol>
				</div>
			</section>
			<Footer />
		</div>
	);
}
