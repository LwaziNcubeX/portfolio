import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { logo } from '@/assets';


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