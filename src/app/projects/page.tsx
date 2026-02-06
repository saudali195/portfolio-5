const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality",
  },
  { id: 3, title: "Portfolio Website", description: "A responsive portfolio website showcasing my work and skills" },
]

export default function Projects() {
  return (
    <div className="min-h-screen p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  )
}

