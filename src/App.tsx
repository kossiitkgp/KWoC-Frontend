import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./styles/constants.css";
import { AuthProvider } from "./util/auth";
import { ROUTER_PATHS } from "./util/constants";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scene from "./components/Scene";
import Snow from "./components/Snow";
import Home from "./pages/Home";
import TimelinePage from "./pages/Timeline";
import RegForm from "./pages/RegForm";
import OAuth from "./pages/OAuth";
import Faq from "./pages/FAQPage";
import Projects from "./pages/Projects";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import AdminDashboard from "./pages/Admin";
import ProjectForm from "./pages/ProjectForm";

const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname.toLowerCase().replace(/\/+$/, "") === "/timeline") return;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  const { pathname } = useLocation();
  const isTimeline = pathname.toLowerCase().replace(/\/+$/, "") === "/timeline";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="App" role="main">
      <ScrollToHash />
      {!isTimeline && (
        <div className="winter-bg" aria-hidden="true">
          <Scene />
          <div className="veil" />
          <Snow paused={reducedMotion} />
        </div>
      )}
      {!isTimeline && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/timeline" element={<TimelinePage />} />
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
      {!isTimeline && <Footer />}
    </div>
  );
}

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppShell />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
