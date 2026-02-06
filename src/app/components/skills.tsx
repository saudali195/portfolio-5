"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// Skill data
const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Languages" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "GraphQL", level: 65, category: "API" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "GSAP", level: 75, category: "Animation" },
  { name: "Framer Motion", level: 80, category: "Animation" },
  { name: "Docker", level: 65, category: "DevOps" },
]

// Group skills by category
const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  },
  {} as Record<string, (typeof skills)[number][]>,
)

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills by category */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-12">
              {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="inline-block w-8 h-1 bg-primary mr-3"></span>
                    {category}
                  </h3>

                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 * skillIndex + 0.2 * index }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-purple-500"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.2 * skillIndex }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies cloud */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <span className="inline-block w-8 h-1 bg-primary mr-3"></span>
              Technologies I Work With
            </h3>

            <div className="relative h-[400px] bg-secondary/30 rounded-2xl p-8 overflow-hidden">
              {[
                "JavaScript",
                "HTML5",
                "CSS3",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "REST API",
                "Tailwind CSS",
                "SASS",
                "Redux",
                "Git",
                "GitHub",
                "Docker",
                "AWS",
                "Firebase",
                "Vercel",
                "Jest",
                "TypeScript",
                "Webpack",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute px-3 py-1 bg-card text-card-foreground rounded-full text-sm shadow-sm"
                  initial={{
                    x: Math.random() * 300 - 150,
                    y: Math.random() * 300 - 150,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          x: Math.random() * 300 - 150,
                          y: Math.random() * 300 - 150,
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * index,
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary))",
                    color: "white",
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
