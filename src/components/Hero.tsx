import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {children}
    </motion.section>
  )
}

const Hero = () => {
  return (
    <div className="container mx-auto px-4 overflow-hidden mt-8">
      <Section id="home">
        <div className="absolute inset-x-0 pointer-events-none">
          <svg className="w-full h-full">
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

        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          >
            <img src="/logo.svg" alt="Lwazi Ncube Logo" width={112} height={112} className="w-full h-full" />
          </motion.div>
          <h1 className="text-3xl font-oswald sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 sm:mt-8 mb-2 sm:mb-4">
            Lwazi Ncube
          </h1>
          <h2 className="text-lg font-oswald sm:text-xl md:text-2xl lg:text-3xl text-orange-500 mb-4 sm:mb-6">
            Backend Engineer & Bot Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            Crafting robust, type-safe APIs and scalable systems with the power of TypeScript.
            Turning complex backend challenges into elegant, maintainable solutions.
          </p>
          <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" whileHover={{ scale: 1.05 }}>
            <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">Explore My Work</Button>
            <Button variant="secondary" className="w-full sm:w-auto">Contact Me</Button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Hero