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
                Soy <span className="text-white">Mauro José Ciappina</span>, un desarrollador
                <span className="text-white"> Full Stack</span> apasionado por resolver problemas
                tecnológicos complejos y crear soluciones innovadoras.
              </p>

              <p>
                Mi enfoque se centra en el desarrollo de aplicaciones web y móviles
                utilizando las tecnologías más modernas y eficientes. Me especializo
                en la creación de experiencias de usuario intuitivas y atractivas,
                respaldadas por arquitecturas robustas y escalables.
              </p>

              <p>
                Con experiencia en proyectos de diversa complejidad, me caracterizo
                por mi capacidad para adaptarme rápidamente a nuevos desafíos y
                tecnologías. Me apasiona el aprendizaje continuo y la búsqueda
                constante de las mejores prácticas en desarrollo de software.
              </p>

              <p>
                Disfruto colaborando en equipos multidisciplinarios, aportando
                mi conocimiento técnico y creatividad para alcanzar soluciones
                óptimas. Mi objetivo es crear productos tecnológicos que no solo
                funcionen perfectamente, sino que también generen un impacto
                positivo en quienes los utilizan.
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
