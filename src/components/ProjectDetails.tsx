import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, ExternalLinkIcon, ArrowLeft, Calendar, User } from 'lucide-react'

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceCode: string;
  demoLink: string;
  date: string;
  author: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "AquaBills - Water billing system",
    description: "AquaBills is a comprehensive water billing management system designed to streamline the process of managing water usage and billing. It automates the calculation of water bills based on consumption, generates invoices, and tracks payments.",
    longDescription: "AquaBills is built with a React frontend and a Python Flask backend. It uses Appwrite for authentication and database management. The system allows water utility companies to manage customer accounts, record meter readings, calculate bills based on consumption tiers, and generate invoices. It also includes features for customers to view their usage history, pay bills online, and report issues.",
    tags: [
      { name: "React", color: "bg-blue-500 text-white" },
      { name: "Python", color: "bg-yellow-500 text-black" },
      { name: "Appwrite", color: "bg-pink-500 text-white" },
      { name: "Flask", color: "bg-green-500 text-white" },
    ],
    image: "/images/aquabills.png?height=400&width=720",
    sourceCode: "https://github.com/yourusername/aquabills",
    demoLink: "https://aquabills.vercel.app",
    date: "2023-06-15",
    author: "John Doe",
  },
  // ... other projects
]

const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!id) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Error: Missing Project ID</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-4">Sorry, we couldn't find the project you're looking for.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Button variant="outline" size="sm" asChild className="mb-8">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6 text-blue-400">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full rounded-xl shadow-lg mb-8" />
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className={`${tag.color} font-medium text-sm px-3 py-1 rounded-full`}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl mb-6">{project.description}</p>
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <p>{project.longDescription}</p>
            </div>
          </div>
          <div>
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Project Info</h2>
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Date: {project.date}</span>
              </div>
              <div className="flex items-center mb-6">
                <User className="w-5 h-5 mr-2" />
                <span>Author: {project.author}</span>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild className="w-full">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="w-5 h-5 mr-2" />
                    View Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails