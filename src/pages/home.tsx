import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='App'>
      <h1>Ganesh</h1>
      <h2 style={{ paddingTop: '0.5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        <span style={{ color: '#ffff', fontWeight: 'bold' }}>
          <Typewriter
            words={['Fullstack Developer', 'Data Analyst', 'ML Engineer']}
            loop={4}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </span>
      </h2>
    </div>
  )
}

export default Home
