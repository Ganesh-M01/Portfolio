import './App.css';
import Navbar from '../components/Nav';
//import FollowCursor from '../components/FlowCursor';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Beams from '../components/Beams';

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>

      {/* GLOBAL BACKGROUND */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      >
        <Beams
          beamWidth={2.5}
          beamHeight={30}
          beamNumber={6}
          lightColor="#01a714"
          speed={4.7}
          noiseIntensity={1.75}
          scale={0.26}
          rotation={43}
        />
      </div>

      {/* WEBSITE CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
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

    </div>
  );
}

export default App;