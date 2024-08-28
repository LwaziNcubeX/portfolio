import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header/>
        <main className="container mx-auto px-4 pt-20">
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App
