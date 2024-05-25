import  Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import { Home } from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Glossary from "./pages/Glossary";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glossary" element={<Glossary />} />

      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
