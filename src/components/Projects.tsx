import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'

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
      title: "AquaBills - Water billing system",
      description: "AquaBills is a comprehensive water billing management system designed to streamline the process of managing water usage and billing. It automates the calculation of water bills based on consumption, generates invoices, and tracks payments.",
      tags: [
        { name: "React", color: "bg-teal-600 text-white" },
        { name: "Python", color: "bg-yellow-600 text-white" },
        { name: "Appwrite", color: "bg-pink-600 text-white" },
        { name: "Flask", color: "bg-green-600 text-white" },
      ],
      image: "/images/aquabills.png?height=200&width=360",
      sourceCode: "https://github.com/yourusername/aquabills",
      demoLink: "https://aquabills.vercel.app",
    },
    {
      title: "Renomy - Telegram Bot",
      description: "A file management and automation service for Telegram",
      tags: [
        { name: "Python", color: "bg-yellow-600 text-white" },
        { name: "python-telegram-bot", color: "bg-blue-600 text-white" },
        { name: "MongoDB", color: "bg-green-600 text-white" },
      ],
      image: "/images/image2.jpg?height=200&width=360",
      sourceCode: "https://github.com/yourusername/renomy-bot",
      demoLink: "https://t.me/RenomyBot",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Responsive dashboard for visualizing real-time data streams",
      tags: [
        { name: "React", color: "bg-teal-600 text-white" },
        { name: "TypeScript", color: "bg-blue-600 text-white" },
        { name: "WebSocket", color: "bg-purple-600 text-white" },
      ],
      image: "/images/image3.jpg?height=200&width=360",
      sourceCode: "https://github.com/yourusername/realtime-analytics",
      demoLink: "https://realtime-analytics-demo.vercel.app",
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
                className="bg-slate-950 border-none overflow-hidden rounded-lg drop-shadow-lg shadow-orange-500/50 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-3 sm:p-4 flex flex-col flex-grow">
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
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex gap-2 mt-auto">
                    <Button variant="link" size="sm" asChild>
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
                    <Button variant="link" size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
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