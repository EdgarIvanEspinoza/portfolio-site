"use client";

import { motion } from "framer-motion";
import { Image } from "@heroui/react";

const experiences = [
  {
    id: "01",
    role: "Senior Software Developer",
    company: "NATIVE INSTRUMENTS",
    logo: "/assets/native-instruments.webp",
    period: "AUG 2024 - PRESENT",
    location: "REMOTE - BERLIN, GERMANY",
    description:
      "Developing Native Access application with React and Electron. Building scalable UI components and features for product discovery, installation, and management in cross-functional Agile team.",
    stack: ["Electron", "React", "TypeScript", "Redux", "GraphQL"],
  },
  {
    id: "02",
    role: "Senior Frontend Engineer",
    company: "FACEPHI",
    logo: "/assets/facephi_logo.jpg",
    period: "JUN 2024 - AUG 2024",
    location: "REMOTE - ALICANTE, SPAIN",
    description:
      "Developed the KYB (Know Your Business) module, focusing on immediate adaptability to regulatory changes. Implemented Feature Flags and enhanced performance of key React components.",
    stack: ["React", "Next.js", "TypeScript", "GraphQL", "Styled Components"],
  },
  {
    id: "03",
    role: "Frontend Engineer & Team Leadership",
    company: "OPENBANK (ZINIA WEB TEAM)",
    logo: "/assets/openbank_logo.jpg",
    period: "AUG 2022 - JUN 2024",
    location: "MADRID, SPAIN",
    description:
      "Led team of front-end developers building high-quality, responsive user interfaces. Integrated RESTful APIs and microservices on AWS. Developed internal tools including OTP consultant extension.",
    stack: ["React", "TypeScript", "Styled Components", "REST APIs", "AWS"],
  },
  {
    id: "04",
    role: "Co-Founder & Technical Manager",
    company: "ROYAL MEDIA VENEZUELA",
    logo: "/assets/royalmedia_logo.jpg",
    period: "ENE 2014 - SEP 2021",
    location: "CARACAS, VENEZUELA",
    description:
      "Co-founded and managed web development agency. Led development teams creating tailored applications for high-profile clients including McDonald's Venezuela and Editorial Santillana.",
    stack: ["PHP", "WordPress", "JavaScript", "Unity", "C#", "Blender"],
  },
  {
    id: "05",
    role: "Co-Founder & Technical Project Manager",
    company: "EN EL TROPYCO",
    logo: "/assets/eneltropyco.jpg",
    period: "FEB 2018 - FEB 2021",
    location: "CARACAS, VENEZUELA",
    description:
      "Managed multidisciplinary team developing digital marketing strategies and technological solutions for event management and advertising campaigns.",
    stack: ["Project Management", "Team Leadership", "Digital Strategy"],
  },
  {
    id: "06",
    role: "General Manager",
    company: "EDGARSOUND SONIDO PROFESIONAL",
    logo: "/assets/edgarsound.png",
    period: "2009 - 2018",
    location: "CARACAS, VENEZUELA",
    description:
      "Led company to become nationally recognized leader in professional sound industry. Managed operations, technical service, equipment maintenance, and strategic planning.",
    stack: [
      "Operations Management",
      "Technical Team Management",
      "Strategic Planning",
    ],
  },
];

export const Experiences = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative" id="experiences">
      <div className="flex flex-col items-start mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-p5-red px-4 py-1 clip-slanted mb-2 transform -rotate-1"
        >
          <h2 className="text-p5-white font-anton text-xl tracking-widest uppercase">
            CAREER HISTORY
          </h2>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-anton text-p5-white tracking-widest uppercase text-outline">
          PROFESSIONAL <span className="text-p5-red">JOURNEY</span>
        </h1>
      </div>

      <div className="relative border-l-8 border-p5-red ml-4 md:ml-8 space-y-12 pb-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative pl-8 md:pl-12 group hover:z-20"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[20px] top-4 w-8 h-8 clip-jagged bg-p5-yellow border-4 border-p5-black group-hover:scale-150 transition-transform flex items-center justify-center">
              <div className="w-2 h-2 bg-p5-black rounded-full" />
            </div>

            {/* Shadow Base layer */}
            <div className="absolute top-0 right-0 bottom-0 left-8 md:left-12 bg-p5-black clip-slanted translate-x-3 translate-y-3 z-[-1] transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />

            <div className="bg-p5-white p-6 md:p-8 border-4 border-p5-black clip-slanted hover:-rotate-1 transition-transform">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden border-4 border-p5-black clip-slanted-reverse bg-p5-yellow">
                    {exp.logo ? (
                      <Image src={exp.logo} alt={exp.company} className="w-full h-full object-cover" removeWrapper />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-p5-red text-p5-white font-anton text-2xl">
                        {exp.company.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-anton text-p5-black uppercase tracking-wider mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-p5-white bg-p5-black inline-block px-2 py-1 clip-slanted font-bold text-sm tracking-widest uppercase">
                      {exp.role}
                    </p>
                  </div>
                </div>
                
                <div className="text-right md:text-center shrink-0">
                  <div className="text-p5-white bg-p5-red px-3 py-1 font-anton tracking-widest text-lg clip-slanted-reverse shadow-[2px_2px_0_0_rgba(17,17,17,1)] inline-block transform rotate-2">
                    {exp.period}
                  </div>
                  <div className="text-p5-black font-bold text-sm mt-2 tracking-wide uppercase">
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-p5-black font-bold text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-p5-yellow border-2 border-p5-black text-xs font-anton tracking-wider text-p5-black text-center clip-button"
                  >
                    {tech}
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
