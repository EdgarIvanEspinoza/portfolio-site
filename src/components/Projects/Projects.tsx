"use client";

import { Image, Button } from "@heroui/react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Wedding Site",
    client: "Ivan & Joanna",
    role: "Full Stack",
    image: "/assets/wedding-site.png",
    link: "https://www.ivanyjoanna.com/",
    outcome: "Launched responsive wedding site with 99% performance score",
    tech: ["React", "Next.js", "Tailwind", "Vercel", "Mailchimp"],
  },
  {
    id: "02",
    title: "Zinia App",
    client: "Openbank by Santander",
    role: "Frontend Team Lead",
    image: "/assets/zinia.png",
    link: "https://www.zinia.com/",
    outcome: "Led frontend revamp improving conversion on key flows",
    tech: ["React", "Redux", "Styled Components"],
  },
  {
    id: "03",
    title: "Aeternus AI",
    client: "Personal",
    role: "AI Integration",
    image: "/assets/aeternus.webp",
    link: "https://www.aeternuslab.com/",
    outcome: "Built an AI prototype to test engagement with new feature",
    tech: ["Next.js", "OpenAI API", "Vercel", "Neo4j", "Prisma"],
  },
  {
    id: "04",
    title: "PixelHitos",
    client: "PixelHitos Art Store",
    role: "E-commerce",
    image: "/assets/pixelhitos.png",
    link: "https://www.pixelhitos.com/",
    outcome: "Implemented storefront yielding improved checkout flow",
    tech: ["Next.js", "Stripe", "React"],
  },
  {
    id: "05",
    title: "AR Book",
    client: "Santillana",
    role: "Augmented Reality",
    image: "/assets/qdea.png",
    link: "https://www.santillana.com.ve/",
    outcome: "Delivered AR experience for educational content",
    tech: ["Unity", "C#", "Vuforia"],
  },
  {
    id: "06",
    title: "Boda Alejandra y Mauro",
    client: "Alejandra & Mauro",
    role: "Wedding Site with RSVP mailing system",
    image: "/assets/alejandraymauro.webp  ",
    link: "https://www.alejandraymauro.com/",
    outcome: "Created a beautiful wedding website with RSVP functionality",
    tech: ["React", "Next.js", "Tailwind", "Mailchimp", "Vercel"],
  },
];

export const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 relative" id="projects">
      <div className="flex flex-col items-start mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-p5-black px-4 py-1 clip-slanted mb-2 transform rotate-1"
        >
          <h2 className="text-p5-white font-anton text-xl tracking-widest uppercase">
            ENGINEERING PORTFOLIO
          </h2>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-anton text-p5-white tracking-widest uppercase text-outline">
          SELECTED <span className="text-p5-black bg-p5-yellow px-2 clip-slanted inline-block pt-1 -rotate-2">WORK</span>
        </h1>
        
        <div className="hidden md:block absolute top-0 right-0 bg-p5-red text-p5-white font-anton px-4 py-2 clip-slanted-reverse rotate-3 shadow-[4px_4px_0_0_rgba(17,17,17,1)]">
          INDEXING {projects.length} ITEMS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 hover:z-20"
          >
            {/* Shadow Base layer */}
            <div className="absolute inset-0 bg-p5-black clip-slanted translate-x-3 translate-y-3 z-[-1] transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            
            <div className="bg-p5-white border-4 border-p5-black clip-slanted h-full flex flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden border-b-4 border-p5-black bg-p5-black p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 filter"
                  removeWrapper
                />
                
                {/* Project ID Tag */}
                <div className="absolute top-0 left-0 bg-p5-yellow text-p5-black font-anton text-3xl px-3 border-r-4 border-b-4 border-p5-black clip-slanted-reverse z-10">
                  {project.id}
                </div>

                <div className="absolute inset-0 bg-p5-red/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-p5-black text-p5-yellow font-anton tracking-widest text-xl border-4 border-p5-black clip-button hover:bg-p5-white hover:text-p5-black transition-colors"
                    onPress={() => window.open(project.link, "_blank")}
                  >
                    VIEW PROJECT
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-p5-white flex-grow flex flex-col">
                <h3 className="text-3xl font-anton text-p5-black tracking-widest uppercase mb-1">
                  {project.title}
                </h3>
                <p className="font-bold text-p5-red mb-3">
                   {project.role}
                </p>
                {project.outcome && (
                  <p className="text-p5-black font-bold mb-4 flex-grow tracking-wide">
                    {project.outcome}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-bold text-p5-white px-2 py-1 bg-p5-black clip-slanted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
