import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import { AuthProvider } from "./util/auth";
import RegForm from "./pages/RegForm";
import OAuth from "./pages/OAuth";
import Faq from "./components/faq/Faq";
import { ROUTER_PATHS } from "./util/constants";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          >
            <Galaxy />
          </div>
          <Header />
          <Routes>
            <Route index element={<Home />} />

            <Route
              path={ROUTER_PATHS.MENTOR_FORM}
              element={<RegForm isStudent={false} />}
            />
            <Route
              path={ROUTER_PATHS.STUDENT_FORM}
              element={<RegForm isStudent={true} />}
            />
            <Route path="/faq" element={<Faq />} />

            <Route
              path={ROUTER_PATHS.STUDENT_DASHBOARD}
              element={<StudentDashboard />}
            />
            <Route
              path={ROUTER_PATHS.MENTOR_DASHBOARD}
              element={<MentorDashboard />}
            />

            <Route path="/oauth" element={<OAuth />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
