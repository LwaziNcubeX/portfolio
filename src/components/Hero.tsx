import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import AnimCircle from './circle';

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
        <div className="flex flex-col items-center text-center relative z-10">
          <AnimCircle/>
          <h1 className="text-3xl font-oswald sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-3 mb-2 sm:mb-2">
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