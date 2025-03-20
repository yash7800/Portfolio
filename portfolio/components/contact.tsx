"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Email:</span> sharmayash0807@gmail.com
            </p>
            <p className="text-lg">
              <span className="font-semibold">Phone:</span> +91 9568682330
            </p>
            <p className="text-lg">
              <span className="font-semibold">Location:</span> Saharanpur, Uttar Pradesh
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yash7800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yashsharma1648/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

