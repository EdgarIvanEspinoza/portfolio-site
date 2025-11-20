"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-12 rounded-none border-l-4 border-l-tech-blue"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            ABOUT <span className="text-gradient">ME</span>
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
          Building digital products that solve user problems and move business
          metrics. Leading discovery, defining measurable outcomes, and
          collaborating with cross-functional teams to iterate quickly and
          deliver value.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
          Focusing on product strategy, roadmap prioritization, UX-driven
          prototyping, and establishing measurement to validate assumptions.
          Collaborating with PMs, designers and stakeholders to translate goals
          into deliverable increments.
        </p>

        <ul className="text-gray-300 list-disc list-inside text-lg font-light">
          <li>
            Delivering frontend modernization that improved engagement by 18%
          </li>
          <li>Shipping a subscription flow increasing MRR</li>
          <li>Coaching teams on delivery practices and product thinking</li>
        </ul>
      </motion.div>
    </div>
  );
};
