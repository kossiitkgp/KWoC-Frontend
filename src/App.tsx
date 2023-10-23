import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Navbar from './components/Navbar'
import Image from './assets/image.png'

function App() {
  return (
    <div className="App">
      <img className='w-full h-screen opacity-80' src={Image}></img>
      <div className='w-full h-screen'><Navbar /></div>
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;