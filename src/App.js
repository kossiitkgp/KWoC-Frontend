import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OAuth from "./components/OAuth";
import FAQ from "./views/FAQ";
import Home from "./views/Home";
import MentorDashboard from "./views/MentorDashboard";
import MentorForm from "./views/MentorForm";
import MentorStats from "./views/MentorStats";
import ProjectEditForm from "./views/ProjectEditFom";
import ProjectForm from "./views/ProjectForm";
import Projects from "./views/Projects";
import ProjectsTable from "./views/ProjectsTable";
import StudentDashboard from "./views/StudentDashboard";
import StudentForm from "./views/StudentForm";
import StudentsTable from "./views/StudentsTable";
import StudentStats from "./views/StudentStats";
import Testimonial from "./views/Testimonials";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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

        <Route
          onChange={ScrollToTop}
          exact
          path="/form/projectedit/:id"
          component={ProjectEditForm}
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
