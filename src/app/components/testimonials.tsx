"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "/6.jpg",
    text: "Working with Saud was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations. He's not just a developer, but a problem solver who truly understands business needs.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupX",
    image: "/9.jpg",
    text: "Saud's ability to translate complex requirements into elegant code is remarkable. He delivered our project ahead of schedule and was always available to address our concerns. His knowledge of modern web technologies is impressive.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    image: "/7.jpg",
    text: "As a designer, I appreciate developers who can bring my designs to life exactly as envisioned. Saud did that and more. His suggestions for animations and interactions actually improved the user experience beyond my initial designs.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder of DataViz",
    image: "/9.jpg",
    text: "We hired Saud to create a complex data visualization dashboard. His technical skills combined with his aesthetic sense resulted in a beautiful and functional product that our clients love. I highly recommend his services.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What people say about working with me
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-12 -left-12 text-primary/10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote size={80} />
          </motion.div>

          <motion.div
            className="absolute -bottom-12 -right-12 text-primary/10 transform rotate-180"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Quote size={80} />
          </motion.div>

          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden">
            <div className="h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                  className="absolute w-full"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div
                      className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Image
                        src={testimonials[current].image || "/9.jpg"}
                        alt={testimonials[current].name}
                        fill
                        className="rounded-full object-cover border-4 border-primary/20"
                      />
                      <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-pulse"></div>
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                      <motion.p
                        className="text-muted-foreground text-lg md:text-xl italic mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        &ldquo;{testimonials[current].text}&rdquo;
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="font-bold text-xl">{testimonials[current].name}</h3>
                        <p className="text-primary">{testimonials[current].role}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary scale-125" : "bg-secondary hover:bg-secondary/80"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <motion.button
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-card p-2 rounded-full shadow-lg text-foreground hover:text-primary transition-colors duration-300"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-card p-2 rounded-full shadow-lg text-foreground hover:text-primary transition-colors duration-300"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
