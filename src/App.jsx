import { useState } from 'react'
import './App.css'
import { ArrowIcon, ArrowIconWhite } from './assets/arrow-icon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header-container'>
        <div className='logo-container'>
          <img src="/logo-auto-center.png" />
          <div className='logo-label'>
          <span className='logo-text-bold'>Auto Center</span>
          <span className='logo-text-regular'>Service</span>
        </div>
        </div>
        
        <nav className='menu-options'>
          <a>Home</a>
          <a>Services</a>
          <a>Location</a>
          <a>About Us</a>
        </nav>
        <button>
          <div className='btn-face-white'>
            Contact us <ArrowIcon/>
          </div>
          <div className='btn-face-color'>
            Contact us <ArrowIconWhite/>
          </div>
        
        </button>
        
      </header>
      <div className="content-container">
        <h1>High-quality mechanics at fair prices.</h1>
        <div className="bubble car">
          🚗
        </div>
        <div className="bubble repair">
          🛠️
        </div>
        <div className="bubble mechanic">
          🧑🏼‍🔧
        </div>
        <div className="bubble money">
          💵
        </div>
      </div>
    </>
  )
}

export default App
