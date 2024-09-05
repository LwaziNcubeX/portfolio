import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { projects } from '@/constants'
import { ProjectDetails } from './ProjectDetails'

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 md:py-24"
    >
      {children}
    </motion.section>
  )
}



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <div className="bg-gray-950 text-white">
      <div className="container max-w-6xl px-6">
        <Section id="projects">
          <h2 className="text-4xl font-bold mb-8 text-center font-oswald">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="bg-gray-950 border-none overflow-hidden rounded-t-lg transition-all duration-300 hover:shadow-md hover:shadow-orange-500/35"
              >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover aspect-video rounded-t-lg"
                  />
                  <div/>
                <CardContent className="px-4 pt-4">
                    <h3 className="text-2xl font-bold mb-3 text-orange-500 hover:text-orange-400 transition-colors duration-300 font-oswald">{project.title}</h3>
                  
                  <p className="text-gray-300 mb-3 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="px-3 pb-3 flex justify-between items-center">
                <Sheet>
                    <SheetTrigger asChild>
                      <Button 
                        className="w-full mb-0 bg-orange-500 hover:bg-orange-600"
                        onClick={() => setSelectedProject(project)}
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="bg-gray-950 border-t border-gray-950">
                      {selectedProject && <ProjectDetails project={selectedProject} />}
                    </SheetContent>
                  </Sheet>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Projects