"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative" id="about">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Background shadow */}
        <div className="absolute top-3 left-3 w-full h-full bg-p5-black clip-slanted z-[-1]" />
        
        <div className="bg-p5-white p-8 md:p-14 border-4 border-p5-black clip-slanted">
          <div className="mb-8 inline-block bg-p5-black px-4 py-2 transform -rotate-2">
            <h2 className="text-4xl md:text-6xl font-anton text-p5-white tracking-widest uppercase m-0 leading-none">
              ABOUT <span className="text-p5-yellow">ME</span>
            </h2>
          </div>

          <p className="text-p5-black text-xl leading-relaxed font-bold mb-6">
            Building digital products that solve user problems and move business
            metrics. Leading discovery, defining measurable outcomes, and
            collaborating with cross-functional teams to iterate quickly and
            deliver value.
          </p>

          <p className="text-p5-black text-xl leading-relaxed font-bold mb-8">
            Focusing on product strategy, roadmap prioritization, UX-driven
            prototyping, and establishing measurement to validate assumptions.
            Collaborating with PMs, designers and stakeholders to translate goals
            into deliverable increments.
          </p>

          <div className="bg-p5-red p-6 clip-slanted-reverse border-4 border-p5-black transform rotate-1 mt-8">
            <ul className="text-p5-white list-none text-lg font-bold space-y-3">
              <li className="flex items-start gap-4">
                <span className="text-p5-yellow font-anton text-2xl leading-none">★</span>
                Delivering frontend modernization that improved engagement by 18%
              </li>
              <li className="flex items-start gap-4">
                <span className="text-p5-yellow font-anton text-2xl leading-none">★</span>
                Shipping a subscription flow increasing MRR
              </li>
              <li className="flex items-start gap-4">
                <span className="text-p5-yellow font-anton text-2xl leading-none">★</span>
                Coaching teams on delivery practices and product thinking
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
