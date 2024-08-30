'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const TypeScriptLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-8 h-8 md:w-12 md:h-12">
    <path fill="#007acc" d="M0 200V0h400v400H0" />
    <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" />
  </svg>
)

const RotatingCube = () => {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <motion.div
      style={{
        rotate,
        width: 40,
        height: 40,
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 10,
      }}
      className="md:w-[60px] md:h-[60px]"
    >
      <TypeScriptLogo />
    </motion.div>
  )
}

const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-gray-950 text-white">
      <RotatingCube />
      
      <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md py-2 md:py-4 z-50">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Lwazi<span className="text-orange-500">.</span></h1>
          
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="link" 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={activeSection === item.toLowerCase() ? "text-orange-500" : "text-white"}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </div>
          
          <Button className="hidden md:block bg-orange-500 hover:bg-orange-600">Hire me!</Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-950 py-4 px-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <Button 
                  key={item}
                  variant="ghost" 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`py-2 ${activeSection === item.toLowerCase() ? "text-orange-500" : "text-white"}`}
                >
                  {item}
                </Button>
              ))}
            </div>
            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">Hire me!</Button>
          </motion.div>
        )}
      </header>
    </div>
  )
}

export default Header