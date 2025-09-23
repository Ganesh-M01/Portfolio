import './App.css';
import Navbar from '../components/Nav';
//import FollowCursor from '../components/FlowCursor';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div id="home" style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}>
          <Home />
        </div>
        <div id="about" style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}>
          <About />
        </div>
        <div id="projects" style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}>
          <Projects />
        </div>
        <div id="contact" style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
