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
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
