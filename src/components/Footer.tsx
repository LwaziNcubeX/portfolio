import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 sm:py-12 mt-12 sm:mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8 }}>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Lwazilwenkosi Ncube.
        </p>
      </div>
    </footer>
  )
}

export default Footer