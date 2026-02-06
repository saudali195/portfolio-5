"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "AI Enthusiast", "Athlete"],
    loop: 0,
  })

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I&apos;m <span className="gradient-text">Saud</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl text-muted-foreground mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>{text}</span>
            <Cursor cursorColor="hsl(var(--primary))" />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Creating elegant, functional, and user-friendly web applications with modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/my-cv.pdf" className="primary-button">
              Download CV
            </Link>
            <Link
              href="#contact"
              className="secondary-button"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/saud-muhammad-ali-6b4a222b6"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/saudali195"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:saud.al.faisal927@gmail.com"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
  {/* Soft gradient glow background */}
  <motion.div
    className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-25"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Subtle floating image blob */}
  <motion.div
    className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden blob bg-secondary shadow-lg"
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/9.jpg"
      alt="Saud Muhammad Ali"
      fill
      className="object-cover p-2"
    />
  </motion.div>
</div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onClick={scrollToAbout}
      >
        <ArrowDown className="text-primary" />
      </motion.div>
    </section>
  )
}
