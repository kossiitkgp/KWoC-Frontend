import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Testimonials from "./pages/Testimonials";
import OAuth from "./pages/OAuth";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./util/auth";
import { ROUTER_PATHS } from "./util/constants";
import MentorDashboard from "./pages/MentorDashboard";
import ProjectForm from "./pages/ProjectForm";
import ScrollToTop from "./util/scrollToTop";
import StudentDashboard from "./pages/StudentDashboard";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path={ROUTER_PATHS.MENTOR_FORM} element={<RegistrationForm isStudent={false} />} />
              <Route path={ROUTER_PATHS.STUDENT_FORM} element={<RegistrationForm isStudent={true} />} />
              <Route path={ROUTER_PATHS.STUDENT_DASHBOARD} element={<StudentDashboard />} />
              <Route path={ROUTER_PATHS.PROJECTS_LIST} element={<Projects />} />
              <Route
                path={ROUTER_PATHS.PROJECT_FORM}
                element={<ProjectForm />}
              />
              <Route
                path={ROUTER_PATHS.PROJECT_EDIT_FORM}
                element={<ProjectForm isEditing={true} />}
              />
              <Route path={ROUTER_PATHS.FAQ} element={<FAQ />} />
              {/* <Route
              path={ROUTER_PATHS.TESTIMONIALS}
              element={<Testimonials />}
            /> */}
              <Route path={ROUTER_PATHS.OAUTH} element={<OAuth />} />
              <Route
                path={ROUTER_PATHS.MENTOR_DASHBOARD}
                element={<MentorDashboard />}
              />
            </Routes>
          </AuthProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
