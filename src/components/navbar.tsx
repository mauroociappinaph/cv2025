import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" asChild>
              <Link href="#projects">Proyectos</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#skills">Habilidades</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
