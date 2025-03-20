"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer",
    company: "Blackbird Australia Virtual Experience program on Forage",
    duration: "August 2023 - January 2025",
    description:
      "Collaborated using GitHub, built and verified code, conducted product/market fit analysis, and contributed to sprint retrospectives.",
    certificateLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/nWHPnWj8YqGJh5kQB/8XSySTLv68WYeFhke_nWHPnWj8YqGJh5kQB_4AWZCtdEtN2EY5bre_1737552160596_completion_certificate.pdf",
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-lg text-blue-400 mb-2">{exp.company}</h4>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <p>{exp.description}</p>
              <a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
