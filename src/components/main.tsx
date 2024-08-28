'use client'

import { Github, Linkedin, me, Telegram, Twitter } from "@/assets"
import { Button } from "@/components/ui/button"
import Contact from "./contact"
import { motion } from "framer-motion"

export default function Component2() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center text-[20vw] font-bold text-gray-800/10 select-none pointer-events-none">
        LNX
      </div>
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0,100 Q50,50 100,100 T200,100"
          stroke="rgba(74, 222, 128, 0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 Q100,150 200,200 T400,200"
          stroke="rgba(74, 222, 128, 0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
      <main className="flex-1 p-6 md:p-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Hey, I'm Lwazi Ncube, <br/>
              </h1>
              <p className="text-gray-400 mb-8">
                I care a lot about using design for positive impact, and enjoy creating user-centric, delightful, and human experiences.
              </p>
              <div className="flex space-x-4">
                <Contact />
                <Button variant="link" size="icon">
                  <img src={Github} className="h-8 w-8" alt="Github" />
                </Button>
                <Button variant="link" size="icon">
                  <img src={Telegram} className="h-8 w-8" alt="Telegram" />
                </Button>
                <Button variant="link" size="icon">
                  <img src={Twitter} className="h-8 w-8" alt="Twitter" />
                </Button>
                <Button variant="link" size="icon">
                  <img src={Linkedin} className="h-8 w-8" alt="LinkedIn" />
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-[250px] h-[250px] ">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-green-400 to-gray-700 rounded-3xl "
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <img
                  src={me}
                  alt="Lwazi Ncube"
                  className="rounded-3xl relative z-10 w-full h-full object-cover"
                  width="400"
                  height="400"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}