import './App.css'
import { Navbar } from './components'
import Component from './components/main'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar/>
        <Component/>
      </div>
    </>
  )
}

export default App
