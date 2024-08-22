import { logo } from "@/assets"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-3 border-b border-gray-800">
        <div className="text-4xl font-bold text-green-400" style={{ fontFamily: "'New Amsterdam', sans-serif" }}>
            <img src={logo} alt="Logo" className="h-10"/>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
            Works
          </a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
            Contact
          </a>
        </nav>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </header>
    </div>
  )
}

export default Navbar