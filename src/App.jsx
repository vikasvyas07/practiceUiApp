import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabar from './Nabar'
import HeroSection from './Hero'
import JobsGrid from './JobGrid'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nabar />
        <HeroSection />
        <JobsGrid />
        <Footer />
        </div>
    </>
  )
}

export default App
