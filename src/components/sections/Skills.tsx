"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { BadgeCheck } from "lucide-react";

type SkillCategory = {
  title: string;
  skills: string[];
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "HTML5",
        "CSS3",
        "Flutter",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring",
        "Node.js",
        "NestJS",
        "Python",
        "C#",
        "Delphi",
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "GraphQL",
      ],
    },
    {
      title: "DevOps & Herramientas",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "Google Cloud",
        "Azure DevOps",
        "Heroku",
        "NPM",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Habilidades
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <BadgeCheck className="h-5 w-5 text-primary mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-black/30 border border-zinc-800 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4">Metodologías y Prácticas</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-300">
              <BadgeCheck className="h-5 w-5 text-primary mr-2" />
              <span>Desarrollo Ágil (Scrum/Kanban)</span>
            </div>
            <div className="flex items-center text-gray-300">
              <BadgeCheck className="h-5 w-5 text-primary mr-2" />
              <span>CI/CD</span>
            </div>
            <div className="flex items-center text-gray-300">
              <BadgeCheck className="h-5 w-5 text-primary mr-2" />
              <span>TDD</span>
            </div>
            <div className="flex items-center text-gray-300">
              <BadgeCheck className="h-5 w-5 text-primary mr-2" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center text-gray-300">
              <BadgeCheck className="h-5 w-5 text-primary mr-2" />
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center text-gray-300">
              <BadgeCheck className="h-5 w-5 text-primary mr-2" />
              <span>REST API Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
