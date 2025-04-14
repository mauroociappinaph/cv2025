"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Contacto
          </h2>
          <p className="text-muted-foreground mb-8">
            ¿Interesado en trabajar juntos? No dudes en contactarme.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
