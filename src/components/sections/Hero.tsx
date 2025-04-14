"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {siteConfig.title}
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <a
                href={siteConfig.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Portfolio
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
