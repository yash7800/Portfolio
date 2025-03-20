"use client"

import { motion } from "framer-motion"
import About from "./components/about"
import Contact from "./components/contact"
import Education from "./components/education"
import Experience from "./components/experience"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Skills from "./components/skills"

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </motion.div>
    </main>
  )
}

