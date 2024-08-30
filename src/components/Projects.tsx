import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 md:py-20"
    >
      {children}
    </motion.section>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "TypeSafe API Gateway",
      description: "High-performance API gateway with built-in type checking",
      tags: [
        { name: "TypeScript", color: "bg-blue-700 text-white" },
        { name: "Node.js", color: "bg-green-700 text-white" },
        { name: "Express", color: "bg-gray-700 text-white" },
      ],
      image: "/images/image.jpg?height=200&width=360",
    },
    {
      title: "Distributed Task Queue",
      description: "Scalable, type-safe distributed task queue for microservices",
      tags: [
        { name: "TypeScript", color: "bg-blue-600 text-white" },
        { name: "Redis", color: "bg-red-600 text-white" },
        { name: "Docker", color: "bg-blue-500 text-white" },
      ],
      image: "/images/image2.jpg?height=200&width=360"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Responsive dashboard for visualizing real-time data streams",
      tags: [
        { name: "React", color: "bg-cyan-600 text-white" },
        { name: "TypeScript", color: "bg-blue-600 text-white" },
        { name: "WebSocket", color: "bg-purple-600 text-white" },
      ],
      image: "/images/image3.jpg?height=200&width=360"
    }
  ]

  return (
    <div className="bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <Section id="projects">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center font-oswald">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gray-950 border-none overflow-hidden rounded-lg drop-shadow-lg shadow-orange-500/50"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2 pb-2 sm:pb-3">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="default" 
                        className={`${tag.color} font-sans text-xs rounded-sm`}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-orange-500 font-serif font-bold mb-1 sm:mb-2 text-base sm:text-lg line-clamp-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Projects