import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={siteConfig.links.portfolio} target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
