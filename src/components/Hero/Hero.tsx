"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden pt-20 bg-deep-space">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space to-transparent z-0" />

        <svg
          className="absolute inset-0 w-full h-full z-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="gridDots"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="2"
                height="2"
                fill="rgba(255,255,255, 0.2)"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#gridDots)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0; 0 -12; 0 0; 0 12; 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </rect>
          <rect width="100%" height="100%" fill="url(#gridDots)" opacity="0.18">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0; 0 10; 0 0; 0 -10; 0 0"
              dur="7s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tech-blue/50 z-10"
          style={{ filter: "blur(60px)" }}
          animate={{
            y: [0, -100, 0, 100, 0],
            x: [0, 50, 0, -50, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-tech-purple/50 z-10"
          style={{ filter: "blur(60px)" }}
          animate={{
            y: [0, 80, 0, -80, 0],
            x: [0, -40, 0, 40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="z-20 flex flex-col items-center text-center max-w-4xl px-6 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            IVAN{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={{ y: -6, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              ESPINOZA
            </motion.span>
          </h1>

          <h2 className="text-2xl lg:text-3xl text-gray-200 font-light mb-2 tracking-wide">
            SENIOR SOFTWARE ENGINEER
          </h2>
          <h5 className="text-lg lg:text-xl text-gray-400 font-light mb-8    tracking-wide">
            SPECIALIZING IN PRODUCT-DRIVEN DIGITAL EXPERIENCES
          </h5>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Building and shipping customer-facing digital products — from
            discovery and prototyping to scaling and measurement. Focusing on
            product outcomes, user value, and cross-functional delivery. <br />
            Architecting high-performance digital experiences with
            <span className="text-tech-blue font-bold"> React</span>,
            <span className="text-tech-blue font-bold"> Electron</span>, and
            <span className="text-tech-blue font-bold"> Next.js</span>.
            Specializing in scalable cross-platform applications and team
            leadership.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-tech-blue text-white font-bold tracking-wider px-8 py-6 rounded-none border border-tech-blue hover:bg-transparent hover:text-tech-blue transition-all"
              onPress={() =>
                window.open(
                  "https://www.linkedin.com/in/edgar-ivan-espinoza-3b3b3b1b/",
                  "_blank"
                )
              }
            >
              LINKEDIN_PROFILE
            </Button>
            <Button
              className="bg-transparent text-white font-bold tracking-wider px-8 py-6 rounded-none border border-white/20 hover:border-tech-cyan hover:text-tech-cyan transition-all"
              onPress={() =>
                window.open("https://github.com/edgarivanespinoza", "_blank")
              }
            >
              GITHUB_
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
