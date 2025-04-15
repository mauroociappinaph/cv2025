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
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y gestión de inventario. Construida con React, Node.js y MongoDB.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com/maurojoseciappina/ecommerce-platform",
      liveUrl: "https://ecommerce-platform-demo.vercel.app"
    },
    {
      title: "Task Management App",
      description: "Aplicación para la gestión de tareas con funcionalidades de arrastrar y soltar, notificaciones, y sincronización en tiempo real. Desarrollada con Vue.js y Firebase.",
      image: "/images/projects/task-app.jpg",
      tags: ["Vue.js", "Firebase", "Vuex", "TailwindCSS"],
      githubUrl: "https://github.com/maurojoseciappina/task-management",
      liveUrl: "https://task-management-demo.netlify.app"
    },
    {
      title: "CRM System",
      description: "Sistema de gestión de relaciones con clientes con análisis de datos, seguimiento de ventas e integración con correo electrónico. Construido con Angular y Spring Boot.",
      image: "/images/projects/crm.jpg",
      tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "Chart.js"],
      githubUrl: "https://github.com/maurojoseciappina/crm-system"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Proyectos
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

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
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-white hover:bg-primary/20 hover:text-primary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
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
