import './App.css';
import Footer from './components/footer/Footer';
import MovingTitle from './components/move/MovingTitle';
import MovingTitle2 from './components/move2/MovingTitle2';
import Navbar from './components/nav/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Skills from './pages/skills/Skills';






function App() {
  return (
    <div className="App">
      <Navbar />
      <MovingTitle />
      <br /> <br /> <br />
      <MovingTitle2 />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
