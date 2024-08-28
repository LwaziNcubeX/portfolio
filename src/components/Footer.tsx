import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-zinc-800 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Button variant="ghost" size="icon"><Linkedin /></Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Button variant="ghost" size="icon"><Github /></Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8 }}>
              <Button variant="ghost" size="icon"><Twitter /></Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Button variant="ghost" size="icon"><Mail /></Button>
            </motion.div>
          </div>
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} Lwazi Ncube. Crafted with TypeScript and React.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer