import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import { AuthProvider } from "./util/auth";
import RegForm from "./pages/Form";
import OAuth from "./pages/OAuth";
import Faq from "./components/faq/faq";

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
              path="/form"
              element={<RegForm />}
            />
            <Route
              path="/oauth"
              element={<OAuth />}
            />
            <Route 
              path="/faq" 
              element={<Faq />} /> 
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
