
import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from "../components/Nav"
 
function App() {

  return (
    <>
      <div>
        <Navbar/>

      <div className='App'>
      <h1>Ganesh</h1>
      <h2 style={{ paddingTop: '0.5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        <span style={{ color: '#ffff', fontWeight: 'bold' }}>
          
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Fullstack Developer', 'Data Analyst', 'Devops Engineer']}
            loop={4}
            cursor
            cursorStyle=''
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}

          />
        </span>
      </h2>
    </div>


        
        </div>
    </>
  )
}

export default App
