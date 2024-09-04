import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  const projects = [
  {
    id: 1,
    title: "AquaBills",
    description: "AquaBills is an advanced water billing management system that simplifies water usage tracking and billing. It offers automated calculations based on consumption, easy invoice generation, and efficient payment tracking, providing a seamless solution for managing water utilities.",
    image: "/images/aquabills.png?height=200&width=360",
  },
  {
    id: 2,
    title: "Renomy",
    description: "Renomy is a versatile Telegram bot designed to manage and automate file-related tasks. It offers features like renaming, compressing, and transferring files, making it a powerful tool for streamlining your file management workflow.",
    image: "/images/image4.jpg?height=200&width=360",
  },
  {
    id: 3,
    title: "Events Tracker API",
    description: "The Events Tracker API is a robust backend service that helps you efficiently track and manage events. It supports creating, updating, and querying events, making it ideal for integrating event management capabilities into your applications.",
    image: "/images/image5.jpg?height=200&width=360",
  }
]


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
                <Link to={`${project.id}`} className="relative block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover aspect-video rounded-t-lg"
                  />
                  <div/>
                </Link>
                <CardContent className="px-4 pt-4">
                  <Link to={`/project/${project.id}`}>
                    <h3 className="text-2xl font-bold mb-3 text-orange-500 hover:text-orange-400 transition-colors duration-300 font-oswald">{project.title}</h3>
                  </Link>
                  <p className="text-gray-300 mb-3 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="px-3 pb-3 flex justify-between items-center">
                
                  <Button className="w-full mb-0 bg-orange-500 hover:bg-orange-600" asChild>
                    <Link to={`/project/${project.id}`}>
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
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