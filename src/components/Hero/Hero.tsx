"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden pt-20 bg-transparent">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large red angled block in background */}
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-[150%] bg-p5-red clip-slanted origin-top-left -rotate-12 scale-150"
        />
        {/* Dark overlay on the right to avoid white-on-white */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-1/4 right-0 w-[80%] h-[60%] bg-p5-black clip-jagged"
        />
      </div>

      <div className="z-20 flex flex-col items-center lg:items-start text-center lg:text-left max-w-5xl px-6 gap-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
          className="relative inline-block"
        >
          {/* Black shadow behind text */}
          <div className="absolute top-2 left-2 w-full h-full bg-p5-black clip-slanted translate-x-2 translate-y-2 z-[-1]" />
          <div className="bg-p5-yellow px-8 py-4 clip-slanted border-4 border-p5-black">
            <h1 className="text-6xl lg:text-9xl font-anton text-p5-black tracking-tight leading-none uppercase">
              IVAN <br />
              <motion.span
                className="text-p5-black inline-block mt-2 border-l-8 border-p5-red pl-2"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                ESPINOZA
              </motion.span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-p5-black inline-block px-4 py-2 clip-slanted-reverse -rotate-2"
        >
          <h2 className="text-2xl lg:text-4xl text-p5-white font-anton tracking-widest uppercase">
            SENIOR SOFTWARE ENGINEER
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-p5-red inline-block px-4 py-2 clip-slanted rotate-1"
        >
          <h5 className="text-xl lg:text-2xl text-p5-black font-anton tracking-widest uppercase">
            SPECIALIZING IN PRODUCT-DRIVEN EXPERIENCES
          </h5>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-p5-white p-6 border-4 border-p5-black clip-slanted-reverse max-w-2xl mt-4 relative rotate-1 hover:-rotate-1 transition-transform"
        >
          <p className="text-p5-black text-lg lg:text-xl font-bold leading-relaxed">
            Building and shipping customer-facing digital products — from
            discovery and prototyping to scaling and measurement. <br /><br />
            Architecting high-performance digital experiences with
            <span className="text-p5-red font-black text-2xl uppercase mx-1 bg-p5-yellow px-1 clip-slanted inline-block transform -rotate-2"> React</span>,
            <span className="text-p5-red font-black text-2xl uppercase mx-1 bg-p5-yellow px-1 clip-slanted inline-block transform rotate-2"> Electron</span>, and
            <span className="text-p5-red font-black text-2xl uppercase mx-1 bg-p5-yellow px-1 clip-slanted inline-block transform -rotate-1"> Next.js</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6"
        >
          <Button
            className="bg-p5-red text-p5-white font-anton text-xl tracking-widest px-10 py-8 border-4 border-p5-black clip-button hover:bg-p5-yellow hover:text-p5-black transform transition-all group"
            onPress={() => window.open("https://www.linkedin.com/in/edgar-ivan-espinoza-3b3b3b1b/", "_blank")}
          >
            <span className="group-hover:scale-110 transition-transform inline-block inline-flex items-center gap-2">
              LINKEDIN <span className="text-2xl">★</span>
            </span>
          </Button>
          <Button
            className="bg-p5-black text-p5-white font-anton text-xl tracking-widest px-10 py-8 border-4 border-p5-black clip-button hover:bg-p5-yellow hover:text-p5-black transform transition-all group"
            onPress={() => window.open("https://github.com/edgarivanespinoza", "_blank")}
          >
            <span className="group-hover:scale-110 transition-transform inline-block inline-flex items-center gap-2">
              GITHUB <span className="text-2xl">★</span>
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
