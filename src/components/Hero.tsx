import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { logo } from '@/assets';

const TypeScriptLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-12 h-12">
    <path fill="#007acc" d="M0 200V0h400v400H0" />
    <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" />
  </svg>
)


const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      {children}
    </motion.section>
  )
}

const Hero = () => {
  return (
    <div>
        <Section id="home">
          <div>
          <svg className="absolute inset-x-0 w-full h-full">
        <motion.path
          d="M0,100 Q50,50 100,100 T200,100"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 Q100,150 200,200 T400,200"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
          </div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img src={logo} width={100} height={100}/>
            </motion.div>
            <h1 className="text-6xl font-bold mt-8 mb-4">
              Lwazi Ncube
            </h1>
            <h2 className="text-3xl text-orange-500 mb-6">TypeScript Maestro & Backend Architect</h2>
            <p className="text-xl mb-8 max-w-2xl">
              Crafting robust, type-safe APIs and scalable systems with the power of TypeScript.
              Turning complex backend challenges into elegant, maintainable solutions.
            </p>
            <motion.div className="flex space-x-4" whileHover={{ scale: 1.05 }}>
              <Button className="bg-orange-500 hover:bg-orange-600">Explore My Work</Button>
              <Button variant="secondary">Contact Me</Button>
            </motion.div>
          </div>
        </Section>
    </div>
  )
}

export default Hero