import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Projects from './pages/Projects';
import OAuth from './pages/OAuth';
import Navbar from './components/Navbar';
import { AuthProvider } from './util/auth';
import { REGISTRATIONS_OPEN, ROUTER_PATHS } from './util/constants';
import MentorDashboard from './pages/MentorDashboard';
import ProjectForm from './pages/ProjectForm';
import ScrollToTop from './util/scrollToTop';
import PastProgramsPage from './pages/PastProgramsPage';
import StudentDashboard from './pages/StudentDashboard';
import RegistrationForm from './pages/RegistrationForm';
import NotFoundPage from './pages/404';

interface AppProps {} // Add props if needed

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <AuthProvider>
            <Navbar />
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
              <Route
                path={ROUTER_PATHS.STUDENT_DASHBOARD}
                element={<StudentDashboard />}
              />
              <Route path={ROUTER_PATHS.PROJECTS_LIST} element={<Projects />} />
              {REGISTRATIONS_OPEN && (
                <Route
                  path={ROUTER_PATHS.PROJECT_FORM}
                  element={<ProjectForm />}
                />
              )}
              <Route
                path={ROUTER_PATHS.PROJECT_EDIT_FORM}
                element={<ProjectForm isEditing={true} />}
              />
              <Route path={ROUTER_PATHS.FAQ} element={<FAQ />} />
              <Route path={ROUTER_PATHS.OAUTH} element={<OAuth />} />
              <Route
                path={ROUTER_PATHS.MENTOR_DASHBOARD}
                element={<MentorDashboard />}
              />
              <Route
                path={ROUTER_PATHS.PASTPROGRAMS}
                element={<PastProgramsPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AuthProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
