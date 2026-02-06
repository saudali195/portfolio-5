"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Github, ExternalLink, Code } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A task management application with AI features to prioritize and categorize tasks automatically.",
    image: "/1.png",
    tags: ["React", "Node.js", "AI"],
    github: "https://github.com/saudali195/ai-task-manager",
    demo: "https://ai-task-manager.vercel.app",
    category: "Web App",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/2.png",
    tags: ["Next.js", "MongoDB", "Stripe"],
    github: "https://github.com/saudali195/Hackathon",
    demo: "https://eweb-ochre.vercel.app",
    category: "Web App",
  },
  {
    id: 3,
    title: "Portfolio Website Template",
    description:
      "A customizable portfolio template for developers and designers with animations and responsive design.",
    image: "/1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/saudali195/portfolio-template",
    demo: "https://portfolio-3-wheat.vercel.app",
    category: "Template",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description:
      "A real-time messaging platform with features like typing indicators, read receipts, and file sharing.",
    image: "/1.png",
    tags: ["React", "Socket.io", "Firebase"],
    github: "https://github.com/saudali195/realtime-chat",
    demo: "https://realtime-chat.vercel.app",
    category: "Web App",
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "/1.png",
    tags: ["D3.js", "React", "Express"],
    github: "https://github.com/saudali195/data-dashboard",
    demo: "https://data-dashboard.vercel.app",
    category: "Data",
  },
  {
    id: 6,
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness application with workout tracking, nutrition planning, and progress analytics.",
    image: "/1.png",
    tags: ["React Native", "GraphQL", "MongoDB"],
    github: "https://github.com/saudali195/fitness-app",
    demo: "https://fitness-app.vercel.app",
    category: "Mobile",
  },
]

// Categories for filtering
const categories = ["All", "Web App", "Mobile", "Data", "Template"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  // Filter projects when category changes
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore my recent work and personal projects
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                layout
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/1.png"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredProject === project.id ? "scale(1.1)" : "scale(1)",
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-between p-4"
                    style={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                  >
                    <div className="flex space-x-2">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="bg-background/80 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={18} />
                        </motion.div>
                      </Link>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="bg-background/80 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={18} />
                        </motion.div>
                      </Link>
                    </div>

                    <span className="text-xs px-2 py-1 bg-primary/80 text-white rounded-full">{project.category}</span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Code size={18} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
