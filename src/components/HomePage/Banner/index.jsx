import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import "./banner.modules.css";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="banner-main-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            image: " linear-gradient(19deg, #fff 0%, #fff 100%)",
          },
          particles: {
            number: { value: 10, density: { enable: true, value_area: 600 } },
            color: { value: "#000" },
            shape: {
              type: "square",
              stroke: { width: 0, color: "#fff" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 29,
              random: true,
              anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#000",
              opacity: 0,
              width: 0,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="banner-text-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="animate__animated animate__fadeInDown"
        >
          <span className="text-danger">Karma</span> Returns Digital Assets
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="animate__animated animate__fadeInUp"
        >
          A market neutral approach in digital assets to create volatility
          minimized returns. Karma employs its experience of more than 25 years
          in traditional derivatives markets in crypto markets deploying
          institutional grade systems and risk management to create robust
          portfolios and generate returns regardless of market direction
        </motion.h5>
      </div>
    </div>
  );
};

export default Banner;
