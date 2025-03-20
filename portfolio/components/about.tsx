"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20" id="about-section">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-justify">
          Hi, I’m Yash Sharma, an aspiring Software Developer currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Chandigarh Engineering College (2021–2025). I have a strong foundation in programming and specialize in building efficient, user-centric software solutions. With hands-on experience in full-stack web development and problem-solving, I am passionate about leveraging technology to create innovative applications that drive impact and improve user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

