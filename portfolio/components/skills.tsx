"use client"

import { motion } from "framer-motion"

const skills = [
  "C/C++",
  "Data Structures and Algorithms",
  "Object-Oriented Programming (OOP)",
  "SQL",
  "Git",
  "GitHub",
  "React.js",
  "Node.js",
  "Express.js",
  "HTML & CSS",
  "Tailwind CSS",
  "REST API",
  "Responsive Web Design",
  "Tableau",
  "Machine Learning",
  "Artificial Intelligence",
]

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

