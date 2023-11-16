import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Testimonials from "./pages/Testimonials";
import MentorForm from "./pages/MentorForm";
// import StudentForm from "./pages/StudentForm";
import OAuth from "./pages/OAuth";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./util/auth";
import { ROUTER_PATHS } from "./util/constants";
import MentorDashboard from "./pages/MentorDashboard";
import ProjectForm from "./pages/ProjectForm";
import ScrollToTop from "./util/scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path={ROUTER_PATHS.MENTOR_FORM} element={<MentorForm />} />
              {/* <Route path={ROUTER_PATHS.STUDENT_FORM} element={<StudentForm />} /> */}
              {/* <Route path={ROUTER_PATHS.PROJECTS_LIST} element={<Projects />} /> */}
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
