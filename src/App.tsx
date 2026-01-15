import { BrowserRouter, Route, Routes, lazy, Suspense } from "react-router-dom";
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


const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const MentorDashboard = lazy(() => import("./pages/MentorDashboard"));
const AdminDashboard = lazy(() => import("./pages/Admin"));
const ProjectForm = lazy(() => import("./pages/ProjectForm"));

const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true"; 

function App(): JSX.Element { // ✅ TypeScript return type
  return (
    <div className="App" role="main"> {/* ✅ Accessibility */}
      <BrowserRouter>
        <AuthProvider>
          <Galaxy />
          <Header />
          {/* ✅ SUSPENSE WRAP - Faster initial load */}
          <Suspense 
            fallback={
              <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-lg font-medium text-gray-700">Loading...</span>
              </div>
            }
          >
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
          </Suspense>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
