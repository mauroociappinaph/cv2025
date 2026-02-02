"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import Image from "next/image";
import { ChevronDownCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const titles = ["Systems Architect", "Lead Full Stack Engineer", "Open Source Creator"];

  useEffect(() => {
    const currentTitle = titles[wordIndex];
    if (isTyping) {
      if (text.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(currentTitle.slice(0, text.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
          setWordIndex((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping, wordIndex]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900 opacity-80"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <div className="mb-6 inline-block">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider uppercase">
            Engineering of Results 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Mauro José Ciappina
        </h1>

        <div className="h-12 mb-8">
          <h2 className="text-2xl md:text-3xl text-gray-300 relative inline-block">
            <span>{text}</span>
            <span className={`absolute -right-3 top-0 h-full w-[2px] bg-primary ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
          </h2>
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Diseñando fuerzas laborales sintéticas y arquitecturas soberanas que transforman el ROI de la IA.
        </p>

        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <Link href="#projects">
              Ver Proyectos
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <Link href="#contact">
              Contactar
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" passHref>
            <ChevronDownCircle className="h-10 w-10 text-primary/80 hover:text-primary transition-colors cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
}
