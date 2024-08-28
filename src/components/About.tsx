import { me } from '@/assets';
import { motion } from 'framer-motion'

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

const About = () => {
  return (
    <div>
        <Section id="about">
          <h2 className="text-4xl font-bold mb-8 text-center pb-4">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-[250px] h-[250px] ">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-gray-700 rounded-3xl "
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
            <motion.div 
              className="bg-orange-500 p-8 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div>
              <p className="text-lg mb-4">
                With a passion for TypeScript and a knack for backend development, I specialize in creating 
                robust, scalable, and type-safe applications. My expertise lies in leveraging TypeScript's 
                advanced features to build maintainable codebases that stand the test of time.
              </p>
              <p className="text-lg mb-4">
                From designing complex type systems to implementing efficient algorithms, I thrive on 
                solving intricate backend challenges. My goal is to elevate the quality of backend 
                architectures through the power of TypeScript.
              </p>
            </div>
            </motion.div>
          </div>
        </Section>
    </div>
  )
}

export default About