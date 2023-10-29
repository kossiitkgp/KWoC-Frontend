import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Statistics from './pages/Statistics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;