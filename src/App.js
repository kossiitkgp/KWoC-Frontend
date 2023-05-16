import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GA_MEASUREMENT_ID } from "./constants";
import FAQ from "./views/FAQ";
import Home from "./views/Home";
import Projects from "./views/Projects";
import ProjectsTable from "./views/ProjectsTable";
import StudentsTable from "./views/StudentsTable";
import Testimonial from "./views/Testimonials";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactGA.initialize(GA_MEASUREMENT_ID, {
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});

function App() {
  useEffect(() => {
    ReactGA.send("pageview", window.location.pathname + window.location.search);
  }, []);

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

        <Route onChange={ScrollToTop} path="/projects" component={Projects} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
