import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"
import { Mail } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link className="flex items-center space-x-2" href="/">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              SOBRE MÍ
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              PROYECTOS
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              HABILIDADES
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              EXPERIENCIA
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-primary/20 hover:text-primary"
              asChild
            >
              <Link href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                CONTACTO
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
