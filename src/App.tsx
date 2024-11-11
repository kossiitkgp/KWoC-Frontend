import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectForm from "./pages/ProjectForm";
// import Projects from "./pages/Projects";
// import Testimonials from "./pages/Testimonials";
// import OAuth from "./pages/OAuth";
// import Navbar from "./components/Navbar";
import { AuthProvider } from "./util/auth";
import { REGISTRATIONS_OPEN, ROUTER_PATHS } from "./util/constants";
// import MentorDashboard from "./pages/MentorDashboard";
// import ProjectForm from "./pages/ProjectForm";
// import ScrollToTop from "./util/scrollToTop";
// import PastProgramsPage from "./pages/PastProgramsPage";
// import StudentDashboard from "./pages/StudentDashboard";
import RegistrationForm from "./pages/RegistrationForm";
// import NotFoundPage from "./pages/404";
import Snowfall from "react-snowfall";
import Lottie from "lottie-react";
import { CSSProperties, useState, useEffect } from "react";

const santaAnimationStyle: CSSProperties = {
  position: "fixed",
  top: "40%",
  width: "500px",
  height: "500px",
  zIndex: 1,
  pointerEvents: "none",
  animation: "santa-fly 20s linear infinite",
};

const santaMirrorAnimationStyle: CSSProperties = {
  position: "fixed",
  top: "40%",
  width: "500px",
  height: "500px",
  zIndex: 1,
  pointerEvents: "none",
  animation: "santa-fly-mirror 20s linear infinite", // Ensure the same duration for uniformity
};

function App() {
  const [santaAnimationData, setSantaAnimationData] = useState(null);
  const [isLeftToRight, setIsLeftToRight] = useState(true); // State to toggle between animations

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/205b9306-eb12-4261-b310-bcbe2d44dfaf/8fIFkoFeKd.json"
        );
        const data = await response.json();
        setSantaAnimationData(data);
      } catch (error) {
        console.error("Error fetching the animation data:", error);
      }
    };

    fetchAnimation();

    const interval = setInterval(() => {
      setIsLeftToRight((prev) => !prev); // Toggle between left to right and right to left every time
    }, 20000); // Change direction every 20 seconds (matching animation duration)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Snowfall // the image can be edited into anything we want, feel free to change
            snowflakeCount={150}
            speed={[0.5, 1]} // array takes [min, max]
            wind={[-0.5, 0.5]}
            radius={[2, 4]}
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              opacity: 0.5,
            }}
          />
          {santaAnimationData && (
            <Lottie
              animationData={santaAnimationData}
              loop={true}
              autoplay={true}
              style={
                (isLeftToRight
                  ? santaAnimationStyle
                  : santaMirrorAnimationStyle) as React.CSSProperties
              }
            />
          )}
          <Routes>
            <Route index element={<Home />} />
            <Route
              path={ROUTER_PATHS.MENTOR_FORM}
              element={<RegistrationForm isStudent={false} />}
            />
            <Route
              path={ROUTER_PATHS.STUDENT_FORM}
              element={<RegistrationForm isStudent={true} />}
            />
            <Route path={ROUTER_PATHS.FAQ} element={<FAQ />} />
            {/* <Route
              path={ROUTER_PATHS.STUDENT_DASHBOARD}
              element={<StudentDashboard />}
            /> */}
            <Route path={ROUTER_PATHS.PROJECTS_LIST} element={<Projects />} />
            {REGISTRATIONS_OPEN && (
              <Route
                path={ROUTER_PATHS.PROJECT_FORM}
                element={<ProjectForm />}
              />
            )}
            {/* <Route
              path={ROUTER_PATHS.PROJECT_EDIT_FORM}
              element={<ProjectForm isEditing={true} />}
            />
            <Route path={ROUTER_PATHS.OAUTH} element={<OAuth />} />
            <Route
              path={ROUTER_PATHS.MENTOR_DASHBOARD}
              element={<MentorDashboard />}
            />
            <Route
              path={ROUTER_PATHS.PASTPROGRAMS}
              element={<PastProgramsPage />}
            />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
