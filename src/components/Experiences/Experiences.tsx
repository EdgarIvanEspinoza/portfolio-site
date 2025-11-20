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
    <div className="max-w-4xl mx-auto px-6 py-24" id="experiences">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-tech-purple font-mono text-sm tracking-widest mb-2">
            CAREER HISTORY
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            PROFESSIONAL <span className="text-gradient">JOURNEY</span>
          </h1>
        </div>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-tech-blue box-shadow-lg shadow-tech-blue/50" />

            <div className="glass-panel p-6 md:p-8 rounded-none border-l-2 border-l-tech-cyan hover:bg-white/5 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rflex items-center justify-center overflow-hidden">
                    {exp.logo ? (
                      <Image src={exp.logo} alt={exp.company} removeWrapper />
                    ) : (
                      <div
                        className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br from-tech-blue to-tech-purple text-white font-bold`}
                      >
                        {exp.company
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-tech-blue font-mono text-sm">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold tracking-wide">
                    {exp.period}
                  </div>
                  <div className="text-gray-500 text-xs font-mono mt-1">
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-deep-space rounded-full text-xs text-gray-300 border border-white/10"
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
