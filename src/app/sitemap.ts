import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mauro-ciappina-portfolio.vercel.app";

  // Para un portafolio de una sola página, solo agregamos la URL base.
  // Si en el futuro agregas más páginas (como un blog), puedes añadirlas aquí.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
