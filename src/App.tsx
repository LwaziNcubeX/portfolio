import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  useEffect(() => {
    document.body.classList.add('bg-gray-950', 'text-white')
    return () => {
      document.body.classList.remove('bg-gray-950', 'text-white')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App