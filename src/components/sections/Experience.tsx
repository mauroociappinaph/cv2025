"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Briefcase, Calendar } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

export function Experience() {
  const experiences: Experience[] = [
    {
      title: "Senior Full Stack Developer",
      company: "TechSolutions Inc.",
      location: "Buenos Aires, Argentina (Remoto)",
      period: "Enero 2022 - Presente",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web de alto rendimiento utilizando React y Node.js.",
        "Implementación de arquitecturas serverless con AWS Lambda y API Gateway.",
        "Diseño y optimización de bases de datos MongoDB y PostgreSQL para manejar grandes volúmenes de datos.",
        "Liderazgo técnico de un equipo de 5 desarrolladores, brindando mentoría y revisiones de código."
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovation Agency",
      location: "Buenos Aires, Argentina",
      period: "Marzo 2020 - Diciembre 2021",
      description: [
        "Desarrollo de aplicaciones web y móviles para clientes en diversos sectores como finanzas, retail y salud.",
        "Implementación de sistemas de autenticación y autorización usando JWT y OAuth 2.0.",
        "Creación de APIs RESTful y GraphQL para integración con sistemas de terceros.",
        "Participación en todo el ciclo de vida del desarrollo, desde la planificación hasta el despliegue."
      ],
      technologies: ["JavaScript", "React", "Express", "GraphQL", "MySQL", "Firebase"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studios",
      location: "Córdoba, Argentina",
      period: "Junio 2018 - Febrero 2020",
      description: [
        "Desarrollo de interfaces de usuario responsivas y accesibles utilizando HTML, CSS y JavaScript.",
        "Implementación de diseños UI/UX siguiendo las mejores prácticas y estándares de la industria.",
        "Optimización del rendimiento del front-end mediante lazy loading, code splitting y otras técnicas.",
        "Colaboración con diseñadores para transformar mockups en código funcional con alta fidelidad."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Sass", "Webpack"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Experiencia
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="relative border-l-2 border-zinc-800 pl-8 ml-4 space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] w-8 h-8 bg-black border-2 border-primary rounded-full flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 pl-4 border-l border-primary/30">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline end */}
          <div className="absolute -left-[25px] bottom-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 p-6 bg-black/30 border border-zinc-800 rounded-lg text-center">
          <h3 className="text-xl font-bold text-white mb-4">Educación</h3>
          <p className="text-gray-300">
            <span className="font-bold">Licenciatura en Informática</span>
            <span className="text-primary mx-2">•</span>
            <span>Universidad de Buenos Aires</span>
            <span className="text-primary mx-2">•</span>
            <span>2014 - 2018</span>
          </p>
          <p className="text-gray-400 mt-2">
            Especialización en Desarrollo de Software y Sistemas de Información
          </p>
        </div>
      </div>
    </section>
  );
}
