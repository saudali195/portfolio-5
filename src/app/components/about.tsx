"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get to know more about me, my background, and what I do
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-lg"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3]"
              variants={itemVariants}
            >
              <Image
                src="/9.jpg?height=600&width=800"
                alt="About Saud Muhammad Ali"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">Saud Muhammad Ali</h3>
                <p className="text-white/80">Full-Stack Developer & AI Enthusiast</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 className="text-2xl font-bold mb-4" variants={itemVariants}>
              My Journey
            </motion.h3>

            <motion.p className="text-muted-foreground mb-6" variants={itemVariants}>
              I am a passionate Full-Stack Developer with expertise in building modern web applications using
              cutting-edge technologies. With a strong foundation in both frontend and backend development, I create
              seamless user experiences that are both functional and visually appealing.
            </motion.p>

            <motion.p className="text-muted-foreground mb-6" variants={itemVariants}>
              My journey in technology began with a fascination for problem-solving and has evolved into a career
              focused on creating innovative solutions. I specialize in React, Next.js, Node.js, and various database
              technologies, allowing me to build complete, scalable applications.
            </motion.p>

            <motion.div className="space-y-4 mt-8" variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-4">Experience & Education</h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Senior Developer</h5>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      <span>2022 - Present</span>
                      <MapPin size={14} className="ml-3 mr-1" />
                      <span>Tech Innovations Inc.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">BSc Computer Science</h5>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      <span>2018 - 2022</span>
                      <MapPin size={14} className="ml-3 mr-1" />
                      <span>University of Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap gap-3" variants={itemVariants}>
              {["Problem Solver", "Team Player", "Creative Thinker", "Detail-Oriented", "Fast Learner"].map((trait) => (
                <span key={trait} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
