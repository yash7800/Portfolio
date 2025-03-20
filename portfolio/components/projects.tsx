"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Generative Pre-trained Transformer",
    description: "All-in-One AI Project for generating images, videos, music, and code based on user prompts.",
    link: "https://eliathree.vercel.app/sign-in?redirect_url=https%3A%2F%2Feliathree.vercel.app%2F",
  },
  {
    title: "Airline Management System",
    description: "C++ based system for flight reservations with real-time seat updates.",
    link: "https://github.com/yash7800/Flight-res-system",
  },
  {
    title: "Wallpaper Application",
    description: "Responsive platform for browsing and downloading high-resolution wallpapers.",
    link: "https://yash7800.github.io/picsjar/",
  },
]

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

