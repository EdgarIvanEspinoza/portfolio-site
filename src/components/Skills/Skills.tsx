"use client";

import { motion } from "framer-motion";

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Vercel",
  "Prisma",
];

const allSkills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind",
  "Zustand",
  "Vite",
  "Webpack",
  "Prisma",
  "Node.js",
  "Express",
  "Redux",
  "Styled Components",
  "Electron",
  "Jest",
  "React Testing Library",
  "Playwright",
  "Cypress",
  "Storybook",
  "GitHub Actions",
  "Vercel",
  "AWS",
  "Sentry",
  "PostHog",
  "GraphQL",
  "REST API",
  "Git",
  "Bitbucket",
  "Jira",
  "Confluence",
  "TDD",
  "BDD",
  "Pair Programming",
  "CI/CD",
  "Agile",
  "Figma",
  "Zeplin",
  "Design Systems",
];

export const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 relative overflow-hidden" id="product">
      <div className="flex flex-col items-start mb-16 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-p5-yellow px-4 py-1 clip-slanted mb-2 transform -rotate-2"
        >
          <h2 className="text-p5-black font-anton text-xl tracking-widest uppercase">
            TECHNICAL ARSENAL
          </h2>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-anton text-p5-white tracking-widest uppercase text-outline">
          SKILLS <span className="text-p5-red">EXPERTISE</span>
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute top-2 left-2 w-full h-full bg-p5-red clip-slanted-reverse z-[-1]" />
        
        <div className="bg-p5-white p-8 md:p-12 border-4 border-p5-black clip-slanted-reverse">
          <div className="bg-p5-black inline-block px-4 py-2 clip-slanted transform rotate-2 mb-6">
             <h3 className="text-p5-yellow font-anton text-2xl tracking-widest uppercase">
               PRODUCT MINDSET
             </h3>
          </div>
          
          <p className="text-p5-black text-xl font-bold leading-relaxed mb-10 max-w-3xl">
            Building digital products end-to-end: from discovery and product
            strategy to shipping and measuring outcomes. Choosing technology to
            accelerate user value, not to showcase tools.
          </p>

          <div className="mb-10">
            <h4 className="text-p5-red font-anton text-3xl mb-4 uppercase tracking-wider">Core stack</h4>
            <div className="flex flex-wrap gap-3">
              {coreStack.map((s, i) => (
                <span
                  key={s}
                  className={`px-4 py-2 font-anton text-xl tracking-wider uppercase border-2 border-p5-black hover-shake cursor-pointer transition-colors ${i % 2 === 0 ? 'bg-p5-black text-p5-white clip-slanted hover:bg-p5-yellow hover:text-p5-black' : 'bg-p5-red text-p5-black clip-slanted-reverse hover:bg-p5-yellow'} `}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <details className="text-lg text-p5-black font-bold group cursor-pointer marker:text-p5-red">
            <summary className="mb-3 hover:text-p5-red transition-colors inline-block bg-p5-yellow px-3 py-1 clip-button border-2 border-p5-black">
               SHOW ALL SKILLS
            </summary>
            <div className="mt-6 flex flex-wrap gap-2 p-4 bg-p5-black clip-slanted border-2 border-p5-red">
              {allSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-p5-white text-p5-black uppercase font-anton text-sm clip-button hover:bg-p5-red hover:text-p5-white transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </details>
        </div>
      </motion.div>
    </div>
  );
};
