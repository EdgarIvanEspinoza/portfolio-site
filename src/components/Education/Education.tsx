"use client";

import { motion } from "framer-motion";

const education = [
  {
    id: "01",
    degree: "B.E. Electronics Engineering",
    institution: "UNIVERSIDAD NUEVA ESPARTA",
    period: "2010 - NOV 2015",
    location: "CARACAS, VENEZUELA",
  },
  {
    id: "02",
    degree: "Front-End Developer, Development",
    institution: "POWERCODERS",
    period: "FEB 2022 - MAY 2022",
    location: "SWITZERLAND",
  },
];

export const Education = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24" id="education">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-tech-cyan font-mono text-sm tracking-widest mb-2">
            ACADEMIC BACKGROUND
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            EDUCATION
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 hover:bg-white/5 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-tech-cyan transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 font-mono text-sm">
                  {edu.institution}
                </p>
              </div>
              <div className="text-right">
                <div className="text-tech-blue font-mono text-sm font-bold">
                  {edu.period}
                </div>
                <div className="text-gray-500 text-xs mt-1">{edu.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
