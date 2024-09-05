import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";

export const ProjectDetails = ({ project }: { project: any }) => (
  <SheetHeader className="p-3">
    <SheetTitle/>
    <SheetDescription />
      <div className="flex flex-col md:flex-row gap-6 h-[40vh] overflow-y-auto">
        <div className="md:w-1/3">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 text-left"> {/* Align text to left */}
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Role */}
          <p className="text-gray-400 mb-4">
            <strong>Role:</strong> {project.role}
          </p>

          {/* Features */}
          <div className="mb-4">
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside text-gray-400">
              {project.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies as Badges */}
          <div className="mb-6">
            <strong>Technologies:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white py-1 px-2 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Demo and Source Code Buttons */}
          <div className="flex gap-4 mb-6">
            <Button variant="link" className="text-orange-500">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button variant="link" className="text-orange-500">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Button>
          </div>
        </div>
      </div>
  </SheetHeader>
);
