import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/constants.css";
import { AuthProvider } from "./util/auth";
import { ROUTER_PATHS } from "./util/constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import Home from "./pages/Home";
import RegForm from "./pages/RegForm";
import OAuth from "./pages/OAuth";
import Faq from "./pages/FAQPage";
import Projects from "./pages/Projects";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import AdminDashboard from "./pages/Admin";
import ProjectForm from "./pages/ProjectForm";

const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";

function App(): JSX.Element {
  return (
   <div className="App" role="main">
      <BrowserRouter>
        <AuthProvider>
          <Galaxy />
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/projects" element={<Projects />} />

            <Route
              path={ROUTER_PATHS.MENTOR_FORM}
              element={<RegForm isStudent={false} />}
            />
            <Route
              path={ROUTER_PATHS.STUDENT_FORM}
              element={<RegForm isStudent={true} />}
            />

            <Route
              path={ROUTER_PATHS.STUDENT_DASHBOARD}
              element={<StudentDashboard />}
            />
            <Route
              path={ROUTER_PATHS.MENTOR_DASHBOARD}
              element={<MentorDashboard />}
            />

            <Route path="/admin" element={<AdminDashboard />} />

            {MENTOR_REG_OPEN && (
              <>
                <Route
                  path={"/project/form"}
                  element={<ProjectForm isEditing={false} />}
                />
                <Route
                  path={"/project/form/:id"}
                  element={<ProjectForm isEditing={true} />}
                />
              </>
            )}

            <Route path="/oauth" element={<OAuth />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
