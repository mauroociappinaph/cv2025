"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export function Projects() {
  const projects = siteConfig.projects;

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Proyectos Destacados
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {(project.githubUrl || project.url) && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-white hover:bg-primary/20 hover:text-primary"
                      asChild
                    >
                      <a href={project.githubUrl || project.url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {project.title.includes("Dude") ? "Case Study" : "Código"}
                      </a>
                    </Button>
                  )}

                  {(project.npmUrl || project.liveUrl) && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.npmUrl || project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.npmUrl ? "NPM" : "Demo"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/maurojoseciappina" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Ver más en GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
