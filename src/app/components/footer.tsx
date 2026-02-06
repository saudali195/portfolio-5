"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="#home" className="text-2xl font-bold gradient-text">
                Saud Muhammad Ali
              </Link>
              <p className="mt-4 text-muted-foreground max-w-md">
                Full-Stack Developer specializing in creating beautiful, functional, and user-friendly web applications
                with modern technologies.
              </p>
              <div className="mt-6 flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/saud-muhammad-ali-6b4a222b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/saudali195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/saudmuhammadali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter size={20} />
                </motion.a>
                <motion.a
                  href="mailto:saud.al.faisal927@gmail.com"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Skills", "Testimonials", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <span className="block">Email:</span>
                  <a href="mailto:saud.al.faisal927@gmail.com" className="text-primary hover:underline">
                    saud.al.faisal927@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <span className="block">Phone:</span>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +92305-2292236
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <span className="block">Location:</span>
                  <span>Karachi, Pakistan.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-border text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Saud Muhammad Ali. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
