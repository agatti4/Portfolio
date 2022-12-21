import NavBar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Projects from './pages/Projects/Projects.js';
// import Contact from './pages/Contact.js';
import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="" element={<Navigate to="/home" />} />
        </Routes>
    </>
  )
}

export default App;
