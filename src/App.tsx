import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import OAuth from "./pages/OAuth";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./util/auth";
import { ROUTER_PATHS } from "./util/constants";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTER_PATHS.PROJECTS_LIST} element={<Projects />} />
            <Route path={ROUTER_PATHS.FAQ} element={<FAQ />} />
            <Route
              path={ROUTER_PATHS.TESTIMONIALS}
              element={<Testimonials />}
            />
            <Route path={ROUTER_PATHS.OAUTH} element={<OAuth />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
