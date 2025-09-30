import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
import About from './pages/About me/About';
import Experience from './pages/Experience & Skills/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;