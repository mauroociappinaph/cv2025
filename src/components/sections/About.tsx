"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Sobre Mí
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
