import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MentorDashboard from "./components/dashboard/MentorDashboard";
import StudentDashboard from "./components/dashboard/StudentDashboard";
import FAQ from "./components/FAQ";
import MentorForm from "./components/form/MentorForm";
import ProjectForm from "./components/form/ProjectForm";
import StudentForm from "./components/form/StudentForm";
import Home from "./components/Home";
import MentorStats from "./components/indivStats/mentorStats/MentorStats";
import StudentStats from "./components/indivStats/studentStats/StudentStats";
import OAuth from "./components/OAuth";
import Projects from "./components/projects/Projects";
import ProjectsTable from "./components/tables/MentorsTable/ProjectsTable";
import StudentsTable from "./components/tables/StudentsTable/StudentsTable";
import Testimonial from "./components/Testimonials";
import "./styles/index.scss";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route onChange={ScrollToTop} exact path="/" component={Home} />

        <Route onChange={ScrollToTop} exact path="/FAQ" component={FAQ} />

        <Route
          onChange={ScrollToTop}
          exact
          path="/testimonial"
          component={Testimonial}
        />

        <Route
          onChange={ScrollToTop}
          exact
          path="/form/mentor"
          component={MentorForm}
        />

        <Route
          onChange={ScrollToTop}
          exact
          path="/form/student"
          component={StudentForm}
        />

        <Route
          onChange={ScrollToTop}
          exact
          path="/form/project"
          component={ProjectForm}
        />
        {/* Dashboard of Student and Mentor */}
        <Route
          onChange={ScrollToTop}
          exact
          path="/dashboard/student"
          component={StudentDashboard}
        />

        <Route
          onChange={ScrollToTop}
          exact
          path="/dashboard/mentor"
          component={MentorDashboard}
        />
        {/* Stats Table for Students and Mentors */}
        <Route
          onChange={ScrollToTop}
          exact
          path="/stats/students"
          component={StudentsTable}
        />
        <Route
          onChange={ScrollToTop}
          exact
          path="/stats/projects"
          component={ProjectsTable}
        />

        {/* Individual stats for Student and Mentor */}
        <Route
          onChange={ScrollToTop}
          exact
          path="/stats/student/:id"
          component={StudentStats}
        />
        <Route
          onChange={ScrollToTop}
          exact
          path="/stats/mentor/:id"
          component={MentorStats}
        />

        <Route onChange={ScrollToTop} path="/oauth" component={OAuth} />

        <Route onChange={ScrollToTop} path="/projects" component={Projects} />
      </div>
    </BrowserRouter>
  );
}

export default App;
