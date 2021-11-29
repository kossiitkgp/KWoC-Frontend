import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import {
  MENTOR_REGISTRATION_LINK,
  STUDENT_REGISTRATION_LINK,
} from "../constants";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [mentorLoggedIn, setMentorLoggedIn] = useState(false);
  const [studentLoggedIn, setStudentLoggedIn] = useState(false);
  const [isDown_1, setIsDown_1] = useState(false);
  const [isDown_2, setIsDown_2] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mentor_jwt")) {
      setMentorLoggedIn(true);
    }

    if (localStorage.getItem("student_jwt")) {
      setStudentLoggedIn(true);
    }
  }, []);

  const navbarNikal = () => {
    setIsActive(!isActive);
  };

  const dropdownNikal = (n) => {
    switch (n) {
      case 1:
        setIsDown_1(!isDown_1);
        break;
      case 2:
        setIsDown_2(!isDown_2);
        break;
    }
  };

  // TODO(@sahil-shubham): make custom auth hooks for user operations
  const logoutMentor = () => {
    localStorage.removeItem("mentor_jwt");
    localStorage.removeItem("mentor_username");
    window.location.pathname = "";
  };

  const logoutStudent = () => {
    localStorage.removeItem("student_jwt");
    localStorage.removeItem("student_username");
    window.location.pathname = "";
  };

  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <ul>
            {window.location.pathname !== "/" ? (
              <li>
                <a href="/">Home</a>
              </li>
            ) : (
              ""
            )}
            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/projects">Projects</a>
            </li>

            <li>
              <a href="/FAQ">FAQs</a>
            </li>

            <li>
              <a href="/#tline">Timeline</a>
            </li>

            <li>
              <a href="/testimonial">Testimonials</a>
            </li>

            <li
              className={isDown_1 ? "isDown" : ""}
              onClick={() => dropdownNikal(1)}
            >
              Stats
              {isDown_1 ? <Icon.ChevronUp /> : <Icon.ChevronDown />}
              <ul>
                <li>
                  <a href="/stats/students">
                    <div className="icon">
                      <Icon.User />
                    </div>
                    <div>
                      Students <p>See student contributions </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/stats/projects">
                    <div className="icon">
                      <Icon.Tool />
                    </div>
                    <div>
                      Projects
                      <p>See what projects are getting contributed to</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon.Slack />
              </a>
            </li>

            <li>
              <a
                href="https://discord.gg/efFwh6fnjk"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  width="71"
                  height="55"
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                      fill="#23272A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="71" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/kossiitkgp/kwoc-bugs"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bug Report
              </a>
            </li>

            <li
              className={isDown_2 ? "isDown" : ""}
              onClick={() => dropdownNikal(2)}
            >
              {mentorLoggedIn === true || studentLoggedIn === true
                ? "Manage Account"
                : "Sign Up"}
              {isDown_2 ? <Icon.ChevronUp /> : <Icon.ChevronDown />}

              {/* TODO: This can be done better */}
              <ul>
                {mentorLoggedIn !== true ? (
                  <li>
                    <a className="navbar-item" href={MENTOR_REGISTRATION_LINK}>
                      <div className="icon">
                        <Icon.User />
                      </div>
                      <div>
                        Mentor Login <p>Login to see your mentor dashboard</p>
                      </div>
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/mentor">
                        <div className="icon">
                          <Icon.Columns />
                        </div>
                        <div>
                          Mentor Dashboard{" "}
                          <p>See your projects, contibutors and annoucements</p>
                        </div>
                      </a>
                    </li>

                    <li className="button" onClick={logoutMentor}>
                      Logout(Mentor)
                    </li>
                  </>
                )}

                {studentLoggedIn !== true ? (
                  <li>
                    <a className="navbar-item" href={STUDENT_REGISTRATION_LINK}>
                      <div className="icon">
                        <Icon.User />
                      </div>
                      <div>
                        Student Login <p>Login to see your student dashboard</p>
                      </div>
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/student">
                        <div className="icon">
                          <Icon.Columns />
                        </div>
                        <div>
                          Student Dashboard{" "}
                          <p>See your projects, mentors and annoucements</p>
                        </div>
                      </a>
                    </li>
                    <li className="button" onClick={logoutStudent}>
                      Logout(Student)
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-navbar">
        <div
          className={`mobile-navbar-icon ${isActive ? "out" : "nope"}`}
          onClick={navbarNikal}
        >
          <span></span>
          <span></span>
        </div>

        <div className={`wrapper ${isActive ? "active" : ""}`}>
          <ul>
            {window.location.pathname !== "/" ? (
              <li>
                <a href="/">Home</a>
              </li>
            ) : (
              ""
            )}

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/projects">Projects</a>
            </li>

            <li>
              <a href="/FAQ">FAQs</a>
            </li>

            <li>
              <a href="/#tline">Timeline</a>
            </li>

            <li>
              <a href="/testimonial">Testimonials</a>
            </li>

            <li>
              <a
                href="https://github.com/kossiitkgp/kwoc-bugs"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bug Report
              </a>
            </li>

            <li
              className={`dropdown-title ${isDown_1 ? "down" : ""}`}
              onClick={() => dropdownNikal(1)}
            >
              Stats
              <ul className="dropdown-content">
                <li>
                  <a href="/stats/students">Students</a>
                </li>
                <li>
                  <a href="/stats/projects">Projects</a>
                </li>
              </ul>
            </li>

            {/* TODO: better to not keep these as navbar items on mobile navbar */}
            <li>
              <a
                href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                target="_blank"
                rel="noreferrer noopener"
              >
                Join our Slack <Icon.Slack />
              </a>
            </li>

            <li>
              <a
                href="https://discord.gg/efFwh6fnjk"
                target="_blank"
                rel="noreferrer noopener"
              >
                Join our Discord server
              </a>
            </li>
            <li
              className={`dropdown-title ${isDown_2 ? "down" : ""}`}
              onClick={() => dropdownNikal(2)}
            >
              {mentorLoggedIn === true || studentLoggedIn === true
                ? "Manage Account"
                : "Login"}

              <ul className="dropdown-content">
                {mentorLoggedIn !== true ? (
                  <li>
                    <a className="navbar-item" href={MENTOR_REGISTRATION_LINK}>
                      Mentor Login
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/mentor">
                        Mentor Dashboard
                      </a>
                    </li>

                    <li onClick={logoutMentor}>Logout(Mentor)</li>
                  </>
                )}

                {studentLoggedIn !== true ? (
                  <li>
                    <a
                      className="navbar-item"
                      id="mentee-login"
                      href={STUDENT_REGISTRATION_LINK}
                    >
                      Student Login
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/student">
                        Student Dashboard
                      </a>
                    </li>
                    <li onClick={logoutStudent}>Logout(Student)</li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
