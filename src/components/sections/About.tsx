import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold relative">
              Sobre Mí
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Soy <span className="text-white">Mauro José Ciappina</span>, un <span className="text-white">Systems Architect</span> enfocado en la construcción de infraestructuras autónomas que operan bajo el estándar de <span className="text-white">Ingeniería de Resultados</span>.
              </p>

              <p>
                Mi especialidad es el diseño de <span className="text-white">Fuerzas Laborales Sintéticas</span>: ecosistemas de agentes autónomos que gestionan ciclos comerciales de punta a punta, optimizando el uso de recursos y garantizando la soberanía de los datos.
              </p>

              <p>
                He desarrollado arquitecturas que reducen los costos de IA en un 90% mediante <span className="text-white">Inferencia Híbrida</span> y sistemas que se auto-optimizan utilizando bucles de <span className="text-white">Meta-Aprendizaje</span> inspirados en los principios de Schmidhuber.
              </p>

              <p>
                Desde la creación de librerías de alto impacto como <span className="text-white">HttpLazy</span> hasta el despliegue de motores de IA soberanos, mi objetivo es transformar la complejidad técnica en activos de negocio escalables, seguros y eficientes.
              </p>
            </div>
          </div>

          <div className="relative flex-1 md:h-[500px] h-[400px]">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                src="/images/profile.jpeg"
                alt="Mauro José Ciappina - Desarrollador Full Stack"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/30 rounded-tl-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
