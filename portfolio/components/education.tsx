"use client"

import { motion } from "framer-motion"

const education = {
  degree: "Bachelor of Technology in AI and ML",
  institution: "Chandigarh Group of Colleges",
  duration: "2021-2025",
}

const certifications = [
  { name: "Web Development Course", provider: "PG-Tech", link: "https://drive.google.com/file/d/1rZIDYcPWty8Xl3Po56Zf5XgKC0ceK6ls/view" },
  { name: "Certified in Data Structures and Algorithms", provider: "30DaysCoding", link: "https://drive.google.com/file/d/16Mx-92w412omCWvsTmbLT9gw8CImQazp/view" },
  { name: "Google Generative AI Course", provider: "Google", link: "https://www.cloudskillsboost.google/public_profiles/ac131eaf-ee60-4069-8622-d9bba56fca48/badges/13600226" },
  { name: "Code Or Die Hackathon", provider: "Delhi Technological University(DTU)", link: "https://unstop.com/certificate-preview/bfc01433-f5cb-450d-b2b2-7d6d99bab5ca?utm_campaign=" },
]

export default function Education() {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-2">{education.degree}</h3>
          <p className="text-lg text-blue-400">{education.institution}</p>
          <p className="text-sm text-gray-400">{education.duration}</p>
        </motion.div>
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{cert.provider}</p>
              <a href={cert.link} className="text-blue-400 hover:text-blue-300 text-sm">
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

