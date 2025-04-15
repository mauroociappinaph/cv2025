import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Timeline", href: "#timeline" },
    { name: "Certificaciones", href: "#certificates" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-zinc-800 text-white hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a href={`mailto:${siteConfig.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-zinc-800 text-white hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-zinc-800 text-white hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link
                    href={section.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Buenos Aires, Argentina</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>+54 11 1234 5678</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-zinc-800 text-white hover:bg-primary/20 hover:text-primary"
            asChild
          >
            <a href="#" aria-label="Volver arriba">
              <ArrowUp className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
