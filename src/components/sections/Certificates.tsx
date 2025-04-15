import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Certificate = {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  url?: string;
};

export function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "Full Stack Web Developer",
      organization: "Digital House",
      date: "2022",
      description: "Desarrollo full stack con Node.js, Express, React y bases de datos SQL/NoSQL.",
      image: "/images/certificates/fullstack-cert.svg",
      url: "https://www.digitalhouse.com/ar/productos/programacion/programacion-web-full-stack"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      organization: "freeCodeCamp",
      date: "2021",
      description: "Estructuras de datos, algoritmos, programación orientada a objetos y programación funcional en JavaScript.",
      image: "/images/certificates/js-cert.svg",
      url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
    },
    {
      title: "AWS Certified Developer – Associate",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Desarrollo, implementación y mantenimiento de aplicaciones en la nube AWS.",
      image: "/images/certificates/aws-cert.svg",
      url: "https://aws.amazon.com/certification/certified-developer-associate/"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Certificaciones
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary/80" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-primary">{certificate.organization}</p>
                    <span className="text-sm bg-zinc-900 px-2 py-1 rounded-full text-gray-400">
                      {certificate.date}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 flex-1">{certificate.description}</p>

                {certificate.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 text-white hover:bg-primary/20 hover:text-primary w-full"
                    asChild
                  >
                    <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Certificado
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
