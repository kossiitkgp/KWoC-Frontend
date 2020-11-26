import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/testimonials.scss';
import '../styles/footer.scss';
import Particles from 'react-particles-js';
export default function Testimonial() {
	return (
		<div className="FAQs">
			<Navbar />
			<section className="hero is-medium is-warning is-bold">
				<div className="hero-body" id="testimonial">
					<div className="container">
					

						<h1 className="title">Testimonials</h1>
						<h2 className="subtitle">Check out how enjoyable KWoC was for the previous participants</h2>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="columns is-multiline is-centered">
						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img className="is-rounded" src="https://avatars.githubusercontent.com/Aniq55" alt="" />
							</figure>

							<p>
								KWoC '17 was my first mentoring experience and I enjoyed working with talented people
								who had the zeal and vigour to learn new things. Some of my mentees were also accepted
								as GSoC '18 students, which makes me proud and happy in the true sense of the word. It's
								a great initiative by KOSS to promote the open source culture among students and I hope
								the next version achieves greater heights and influences more lives.
							</p>

							<p>
								Aniq Ur Rahman <em>[ KWoC '17 Mentor ]</em>
							</p>

							<p>
								<a href="https://aniq55.github.io/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/the-ethan-hunt"
									alt=""
								/>
							</figure>

							<p>
								I had a really good time at KWoC '17. My projects prospered well because of inputs from
								participants. Regular chaperoning from KOSS maintained that the quality of the coding
								program never touched a low point and maintained the coding frequency consistent
								throughout the program.
							</p>

							<p>
								Dhruv Apte <em>[ KWoC '17 Mentor ]</em>
							</p>

							<p>
								<a href="https://the-ethan-hunt.github.io/about/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/gauthamzz"
									alt=""
								/>
							</figure>

							<p>
								My project was a normal one before KWOC, something I had worked on in a hackathon. But I
								loved the idea but found it hard to do alone. But due to KWoC I got very good quality
								amazing contributors who helped to changed that small project into a top 3 product in
								Product Hunt and featured in many tech publications.
							</p>

							<p>
								Gautham Santhosh <em>[ KWoC '17 Mentor ]</em>
							</p>

							<p>
								<a href="https://gauthamzz.github.io/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/athityakumar"
									alt=""
								/>
							</figure>

							<p>
								The experience has been great both the years, with a lot of new students learning
								open-source development from KWoC by contributing to the projects. Some of my mentees
								have even gone ahead to do a GSoC project as well in the following summers, and are
								definitely are still actively contributing to open-source.
							</p>

							<p>
								Athitya Kumar <em>[ KWoC '16 and '17' Mentor ]</em>
							</p>

							<p>
								<a href="https://athityakumar.github.io/blog/posts/Kharagpur_Winter_of_Code_2016/">
									Blog
								</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/jajodiaraghav"
									alt=""
								/>
							</figure>

							<p>
								KWoC has provided me opportunities to learn more about open source, accelerate the
								growth of my projects, along with helping new developers explore the power and
								opportunities of FOSS. I highly recommend open source enthusiasts and GSoC aspirants to
								participate in KWoC.
							</p>

							<p>
								Raghav Jajodia <em>[ KWoC 17' Mentor ]</em>
							</p>

							<p>
								<a href="http://jajodiaraghav.github.io/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/yashrsharma44"
									alt=""
								/>
							</figure>

							<p>
								My experience with Kharagpur Winter of Code has been quite good, as the level of
								contribution is quite apt, considering for the beginners.
							</p>

							<p>
								Yash Sharma <em>[ KWoC '17 Student ]</em>
							</p>

							<p>
								<a href="https://medium.com/@yashrsharma44/kwoc-project-report-c337e7222246">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/shantanu0323"
									alt=""
								/>
							</figure>

							<p>
								It was a great experience to take part in KWoC. Thanks to IIT Kharagpur for organizing
								such an event. I sincerely hope to be a part of more and more such programs.
							</p>

							<p>
								Shantanu Pramanik <em>[ KWoc '17 Student ]</em>
							</p>

							<p>
								<a href="https://shantanu0323.wordpress.com/2018/01/05/kwoc-report/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/ThisIsNSH"
									alt=""
								/>
							</figure>

							<p>
								KWOC is a very good opportunity for every student to hone their technical skills. Thank
								you IIT Kharagpur, KOSS for hosting a beginner friendly program.
							</p>

							<p>
								Nishant Singh Hada <em>[ KWoc '17 Student ]</em>
							</p>

							<p>
								<a href="https://nishantshada.blogspot.com/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/nityanandagohain"
									alt=""
								/>
							</figure>

							<p>
								I used to think how could I contribute because I couldn't understand anything about how
								that much code works together. But after this event all that was gone.
							</p>

							<p>
								Nityananda Gohain <em>[ KWoc '17 Student ]</em>
							</p>

							<p>
								<a href="https://nityanandagohain.github.io/kwoc-report.html">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/thealphadollar"
									alt=""
								/>
							</figure>

							<p>
								KWoC is one of the best coding experiences one could get;the environment of everyone
								coming together to learn &amp; teach is a unique one.
							</p>

							<p>
								Shivam Kumar Jha <em>[ KWoc '17 Student ]</em>
							</p>

							<p>
								<a href="http://bit.ly/KWoC17">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars.githubusercontent.com/themousepotato"
									alt=""
								/>
							</figure>

							<p>
								KWoC is a great initiative by KOSS to encourage students in programming environment with
								experienced mentors and make them ready for GSoC.
							</p>

							<p>
								Navaneeth Suresh <em>[ KWoc '17 Student ]</em>
							</p>

							<p>
								<a href="https://medium.com/@themousepotato/kharagpur-winter-of-code-2017-6e350c2252c7">
									Blog
								</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars2.githubusercontent.com/u/23132358?s=460&v=4"
									alt=""
								/>
							</figure>

							<p>
								KWoC was a lot more than experience and learning. Now, I had worked on the repositories
								and had interacted with their makers.
							</p>

							<p>
								Sayan Sinha <em>[ KWoc '16 Student ]</em>
							</p>

							<p>
								<a href="https://blog.kossiitkgp.org/kharagpur-winter-of-code-c4eeb4af71f1">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars1.githubusercontent.com/u/23414388?s=460&v=4"
									alt=""
								/>
							</figure>

							<p>
								I got to learn a lot about web scraping and webdriver automation.Lots of thanks to my
								mentor Nitin Choudhary and KOSS for such a wonderful initiative.
							</p>

							<p>
								Rahul Vernwal <em>[ KWoc '16 Student ]</em>
							</p>

							<p>
								<a href="http://vernwalrahul.blogspot.in/">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img className="is-rounded" src="arindam.jpg" alt="" />
							</figure>

							<p>
								The project consisted of functions to decode and encode functions and some other
								features. I thought of developing a GUI to decode and encode in morsecode.
							</p>

							<p>
								Arindam Biswas <em>[ KWoc '16 Student ]</em>
							</p>

							<p>
								<a href="http://localhost:8000/static/files/arindam.pdf">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img className="is-rounded" src="aditya.jpg" alt="" />
							</figure>

							<p>
								Thanks to the people at Kharagpur open source society for organising Kharagpur Winter of
								code for the students who are eager to contribute to open source community.
							</p>

							<p>
								Aditya Singh <em>[ KWoc '16 Student ]</em>
							</p>

							<p>
								<a href="http://localhost:8000/static/files/adityasingh.pdf">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars1.githubusercontent.com/u/19925138?s=460&v=4"
									alt=""
								/>
							</figure>

							<p>
								That amazing feeling when you make your first commit or successfully merge your first
								pull request is something which cannot be described in words.Thank you KWOC for
								providing such a great opportunity.
							</p>

							<p>
								Zishan Sami <em>[ KWoc '16 Student ]</em>
							</p>

							<p>
								<a href="http://localhost:8000/static/files/zishan_sami.pdf">Blog</a>
							</p>
						</div>

						<div className="column has-text-centered is-4">
							<figure className="image is-128x128 is-inline-block">
								<img
									className="is-rounded"
									src="https://avatars2.githubusercontent.com/u/19743282?s=460&v=4"
									alt=""
								/>
							</figure>

							<p>
								I came to know about KWOC and was happy to contribute yet another project to the open
								source community. Among KWOC projects Sheldonisms impressed me.
							</p>

							<p>
								Amrish Kumar <em>[ KWoc '16 Student ]</em>
							</p>

							<p>
								<a href="http://localhost:8000/static/files/zishan_sami.pdf">Blog</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
