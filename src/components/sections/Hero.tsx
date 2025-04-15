"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="relative z-10 flex items-center justify-center p-8 lg:p-16 bg-background/90 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="text-primary block">Desarrollador</span>
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Full Stack
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-4">

            <Button size="lg" variant="outline" asChild>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right Section - Images Grid */}
      <div className="absolute inset-0 lg:relative grid grid-cols-2 gap-2 p-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000"
            alt="Coding"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000"
            alt="Technology"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000"
            alt="Development"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000"
            alt="Innovation"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/10 pointer-events-none" />
    </section>
  );
}
