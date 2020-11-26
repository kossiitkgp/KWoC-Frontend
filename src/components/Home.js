import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Timeline from './timelinedata/Timeline';
import '../styles/about.scss';
import '../styles/home.scss';
import '../styles/why.scss';
import Part from './Part';
import Particles from 'react-particles-js';
import group from '../images/people.svg';
import github from '../images/github.svg';
import pullRequest from '../images/git-pull-request.svg';

export default function Home() {
	const tags = [
		'Machine learning',
		'Android',
		'Computer Vision',
		'Gaming',
		'Backend',
		'Natural Language Processing',
		'Scrapping',
		'Cognition',
		'Front End',
		'Deep Learning',
		'Operating System',
		'DBMS',
		'OOP',
		'Compilers',
		'Security',
		'Data Mining',
		'Simulations',
		'Artificial Intelligence'
	];

	return (
		<div className="home">
			<Navbar />
			<section className="hero is-fullheight is-dark is-bold">
				<Part />
				<div className="hero-body">
					<div className="container">
						<h1 className="title" id="hero">
							Welcome to KWoC
						</h1>

						<div className="reg-btns " style={{ padding: '0 20%', marginBottom: '20px' }}>
							<p className="control">
								<a
									className="button is-fullwidth "
									href="https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=student"
									style={{ marginBottom: '20px' }}
								>
									Student Registration
								</a>
							</p>
							<p className="control">
								<a
									className="button is-fullwidth "
									href="https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=mentor"
									style={{ marginBottom: '20px' }}
								>
									Mentor Registration
								</a>
							</p>
						</div>

						<div className="manual-btns" style={{ marginBottom: '20px', padding: '0 20%' }}>
							<p className="control">
								<a
									style={{ marginBottom: '20px' }}
									className="button is-fullwidth"
									href="https://github.com/kossiitkgp/kwoc-2018/blob/master/static/files/KWoCStudentManual.pdf"
								>
									Student Manual
								</a>
							</p>
							<p className="control">
								<a
									className="button is-fullwidth "
									href="https://github.com/kossiitkgp/kwoc-2018/blob/master/static/files/KWoCMentorManual.pdf"
								>
									Mentor Manual
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="about">
				<div className="container" />
			</section> */}
			<section className="why-kwoc" id="about">
				<div className="container">
					<h1>About</h1>
					<p>
						Kharagpur Winter of Code is a 5-week long online program for students who are new to open source
						software development. The program not only helps students to get involved in open source, but
						also prepares them for many open source summer programs; Google Summer of Code being one of
						them.
					</p>
					<br />
					<br />
					<h2>Why KWoC?</h2>

					<h3>Intro to Open Source</h3>

					<p>
						KWoC provides a great opportunity to get acquainted with Github along with Git commands and
						contribute to open source efficiently. Brush up your coding skills
					</p>

					<p>
						If you love coding and want to learn about software development then KWoC helps you to get a
						glimpse of it and gives you a head start.
					</p>
					<br />
					<br />
					<h3>Prepare for GSoC</h3>

					<p>
						With KWoC, you get to know about how to select a project, interact with mentors and learn all
						other things that prepare you in the best way for the next GSoC.
					</p>
				</div>
			</section>
			<section className="tags">
				<div className="container">
					<h1>Tags</h1>

					<p>
						{tags.map((tag) => (
							<span key={tag} class="tag cust-tag is-primary is-medium">
								{tag}
							</span>
						))}
					</p>
				</div>
			</section>
			<section className="timeline" id="tline">
				<div className="container">
					<h1 style={{ zIndex: 10 }}>Timeline</h1>
					<Part />
					<Timeline />
				</div>
			</section>

			<section className="stats">
				<div className="container">
					<h1>Statistics: KWoC 2019</h1>
					<div className="columns is-centered">
						<div className="column has-text-centered">
							<img src={group} alt="Group" />

							<h3>2000+ Participants</h3>
						</div>
						<div className="column has-text-centered">
							<img src={pullRequest} alt="pullRequest" />

							<h3>600+ Pull Requests</h3>
						</div>
						<div className="column has-text-centered">
							{/* <Card heading="70+ Mentors" body="Some Random Body" /> */}
							<img src={github} alt="Project" />

							<h3>150+ Projects</h3>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
