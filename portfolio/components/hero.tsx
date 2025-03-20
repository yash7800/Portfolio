"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* Sexy Header */}
      <header className="fixed top-0 left-0 w-full bg-transparent text-white py-4 px-8 flex justify-between items-center z-50 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-wide">Yash Sharma</h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-Helvetica">
            <li><a href="#about-section" className="hover:text-blue-400 transition">About Me</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#education" className="hover:text-blue-400 transition">Education & Certification</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-4">Yash Sharma</h1>
          <h2 className="text-2xl mb-8">Aspiring Software Developer | AI & ML Enthusiast </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
            onClick={() => {
              const target = document.getElementById("about-section");
              if (target) {
                const offsetTop = target.offsetTop;
                window.scrollTo({
                  top: offsetTop - 20, // Scroll just above the section
                  behavior: "smooth",
                });
                
                // Add a small delay for the bounce-back effect
                setTimeout(() => {
                  target.style.animation = "bounceEffect 0.5s ease-in-out";
                  setTimeout(() => {
                    target.style.animation = ""; // Remove the animation after it completes
                  }, 500);
                }, 500);
              }
            }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
          className="absolute w-96 h-96 border-4 border-blue-500 opacity-20"
        />
      </section>
    </>
  );
}
