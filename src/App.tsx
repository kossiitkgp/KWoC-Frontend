import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import OAuth from "./pages/OAuth";
import { AuthProvider } from "./util/auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="oauth" element={<OAuth />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
