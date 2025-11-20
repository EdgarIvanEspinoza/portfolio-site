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
    <div className="max-w-6xl mx-auto px-6 py-24" id="product">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-tech-blue font-mono text-sm tracking-widest mb-2">
            TECHNICAL ARSENAL
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            SKILLS <span className="text-gradient">& EXPERTISE</span>
          </h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="glass-panel p-8 hover:bg-white/5 transition-colors"
      >
        <h3 className="text-tech-blue font-mono text-sm mb-4 tracking-widest">
          PRODUCT
        </h3>
        <p className="text-gray-300 mb-6">
          Building digital products end-to-end: from discovery and product
          strategy to shipping and measuring outcomes. Choosing technology to
          accelerate user value, not to showcase tools.
        </p>

        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Core stack</h4>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 bg-deep-space border border-white/10 text-gray-300 text-xs font-mono hover:border-white/30 hover:text-white transition-all"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <details className="text-sm text-gray-300">
          <summary className="cursor-pointer mb-3">See full tech list</summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {allSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 bg-deep-space border border-white/10 text-gray-300 text-xs font-mono hover:border-white/30 hover:text-white transition-all"
              >
                {s}
              </span>
            ))}
          </div>
        </details>
      </motion.div>
    </div>
  );
};
