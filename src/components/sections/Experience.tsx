"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
            Experiencia
          </h2>
          <div className="space-y-8">
            {siteConfig.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
