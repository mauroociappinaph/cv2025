export const siteConfig = {
  name: "Mauro José Ciappina",
  title: "Systems Architect | Lead Full Stack Engineer",
  description: "Especialista en arquitecturas autónomas y soberanas. Experto en optimización de costos mediante inferencia híbrida y meta-aprendizaje. Autor de HttpLazy.",
  url: "https://mauro-ciappina-portfolio.vercel.app",
  email: "ciappinamaurooj@gmail.com",
  links: {
    github: "https://github.com/mauroociappinaph",
    linkedin: "https://www.linkedin.com/in/maurojoseciappina/",
  },
  experience: [
    {
      title: "Lead Architect",
      company: "THE DUDE (Sovereign AI Engine)",
      period: "Ene 2026 - Actualidad",
      description: [
        "Arquitectó un ecosistema multi-agente para la ejecución autónoma de ciclos comerciales.",
        "Implementó Inferencia Asimétrica logrando un ahorro del 90% en costos de API.",
        "Desarrolló un motor de Meta-Learning basado en gradientes de error.",
        "Garantizó soberanía de datos mediante middleware local de PII Scrubbing."
      ],
      technologies: ["Python", "Ollama", "Redis", "LangGraph", "Pinecone"]
    },
    {
      title: "Founder & Principal Maintainer",
      company: "HttpLazy (NPM Library)",
      period: "Abr 2025 - Actualidad",
      description: [
        "Diseñó una solución de DX para optimizar el consumo de APIs resilientes.",
        "Alcanzó 500+ descargas orgánicas en la primera semana de lanzamiento.",
        "Implementó lógicas avanzadas de interceptores, retries automáticos y gestión de errores."
      ],
      technologies: ["TypeScript", "NPM", "Node.js", "Jest"]
    },
    {
      title: "Backend Developer",
      company: "Dazlab",
      period: "Oct 2024 - Jun 2025",
      description: [
        "Arquitectó infraestructura de backend para videojuegos de alta concurrencia.",
        "Implementó servicios en tiempo real utilizando WebSockets.",
        "Diseñó esquemas de datos complejos y flujos CRUD optimizados bajo SCRUM."
      ],
      technologies: ["Node.js", "Parse Server", "MongoDB", "WebSocket", "Stripe"]
    },
    {
      title: "Full Stack Developer",
      company: "Hows Advisor",
      period: "Mar 2024 - May 2024",
      description: [
        "Desarrollo de plataforma B2B escalable para la conexión de asesores.",
        "Integración de pasarelas de pago y manejo de estado complejo."
      ],
      technologies: ["TypeScript", "React", "Zustand", "Sequelize", "Tailwind", "Stripe"]
    },
    {
      title: "Full Stack Developer",
      company: "Packar",
      period: "Dic 2023 - Abr 2024",
      description: [
        "Participación en plataformas C2C y B2B.",
        "Implementación de flujos de autenticación y persistencia de datos."
      ],
      technologies: ["TypeScript", "Next.js", "NextAuth", "MongoDB", "Node.js"]
    },
    {
      title: "Full Stack Developer (Final Project)",
      company: "Deal Up! (Henry)",
      period: "Ene 2023 - Ago 2023",
      description: [
        "Co-desarrollo de app para conectar emprendedores con inversores.",
        "Liderazgo en el frontend y colaboración en la arquitectura del backend."
      ],
      technologies: ["React", "Redux", "Node.js", "Sequelize", "PostgreSQL"]
    }
  ],
  projects: [
    {
      title: "The Dude: Case Study",
      description: "Whitepaper técnico sobre IA soberana con costo marginal cero y aprendizaje recursivo.",
      url: "https://github.com/mauroociappinaph/the-dude-architecture-case-study",
      tags: ["Arquitectura", "AI Agents", "Meta-Learning"]
    },
    {
      title: "HttpLazy",
      description: "Librería modular para JS/TS enfocada en resiliencia y Developer Experience.",
      npmUrl: "https://www.npmjs.com/package/httplazy",
      version: "2.5.3",
      tags: ["Open Source", "NPM", "TypeScript"]
    },
    {
      title: "BootKiro",
      description: "Sistema de automatización personal que integra Google Suite e IA para productividad.",
      url: "https://github.com/mauroociappinaph/BOOTKIRO",
      tags: ["Automation", "Python", "Telegram API"]
    },
    {
      title: "Gym Price Tracker",
      description: "Script productivo de análisis competitivo en el sector fitness con Selenium y Docker.",
      url: "https://github.com/mauroociappinaph/gym-price-tracker",
      tags: ["Scraping", "Python", "Docker"]
    }
  ],
  skills: {
    frontend: ["React", "Next.js 15", "Redux", "Zustand", "Tailwind CSS", "shadcn/ui", "CSS3", "HTML5"],
    backend: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "Parse Server", "Sequelize", "Prisma"],
    aiArchitecture: ["Multi-Agent Orchestration", "Agentic RAG", "Meta-Learning Loops", "Neural Gating (LSTM)", "Local Inference (Ollama)", "Prompt Engineering"],
    infraData: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Supabase", "Docker", "Git", "CI/CD", "Vercel", "PII Scrubbing"]
  }
}
