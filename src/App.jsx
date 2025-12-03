import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            fixed top-0 left-0 w-full h-full 
            object-cover object-center 
            z-0
          "
        >
          <source src="/Images/snowfall.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-black/40 z-[1]"></div>

        {/* Content */}
        <div className="relative z-[2] flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
