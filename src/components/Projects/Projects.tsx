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
    <div className="max-w-6xl mx-auto px-6 py-24" id="projects">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2">
            ENGINEERING PORTFOLIO
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            SELECTED <span className="text-gradient">WORK</span>
          </h1>
        </div>
        <div className="hidden md:block text-gray-500 font-mono text-xs">
          INDEXING {projects.length} ITEMS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-glass-bg border border-white/5 hover:border-tech-blue/50 transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                removeWrapper
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-tech-cyan font-mono text-xs">
                      {project.client} | {project.role}
                    </p>
                    {project.outcome && (
                      <p className="text-gray-300 text-xs mt-1">
                        {project.outcome}
                      </p>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-tech-blue hover:border-tech-blue transition-all opacity-0 group-hover:opacity-100"
                    onPress={() => window.open(project.link, "_blank")}
                  >
                    VIEW_PROJECT
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/5 bg-black/20">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-gray-400 px-2 py-1 bg-white/5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
