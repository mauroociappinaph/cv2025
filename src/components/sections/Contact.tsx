"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      name: "Email",
      value: "contacto@maurociappina.com",
      icon: <Mail className="h-5 w-5 text-primary" />,
      url: "mailto:contacto@maurociappina.com"
    },
    {
      name: "Phone",
      value: "+54 11 1234 5678",
      icon: <Phone className="h-5 w-5 text-primary" />,
      url: "tel:+5491112345678"
    },
    {
      name: "Location",
      value: "Buenos Aires, Argentina",
      icon: <MapPin className="h-5 w-5 text-primary" />,
      url: "https://goo.gl/maps/YNpA1zjfnjH5yQJaA"
    },
    {
      name: "LinkedIn",
      value: "maurojoseciappina",
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      url: "https://www.linkedin.com/in/maurojoseciappina/"
    },
    {
      name: "GitHub",
      value: "maurojoseciappina",
      icon: <Github className="h-5 w-5 text-primary" />,
      url: "https://github.com/maurojoseciappina"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Contacto
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-gray-300 text-lg">
              ¿Tienes un proyecto interesante o una oportunidad laboral?
              ¡Me encantaría saber de ti! Contáctame directamente a través de cualquiera de estos canales.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{link.name}</h3>
                    <p className="text-gray-400 text-sm">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6">Envíame un mensaje</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Nombre
                  </label>
                  <input
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2 rounded-md bg-black border border-zinc-800 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-3 py-2 rounded-md bg-black border border-zinc-800 text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Asunto
                </label>
                <input
                  id="subject"
                  placeholder="¿De qué se trata?"
                  className="w-full px-3 py-2 rounded-md bg-black border border-zinc-800 text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full min-h-[150px] px-3 py-2 rounded-md bg-black border border-zinc-800 text-white focus:outline-none focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
