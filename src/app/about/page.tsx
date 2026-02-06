export default function About() {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg mb-4">
          I&apos;m a passionate web developer with expertise in modern technologies like React, Next.js, and Node.js.
           I love creating intuitive and visually appealing user interfaces that provide great user experiences.
          </p>
          <p className="text-lg mb-4">
            With a background in both design and development, I bring a unique perspective to every project, ensuring that
            form and function work together seamlessly.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "CSS/SASS", "UI/UX Design"].map((skill) => (
              <li
                key={skill}
                className="bg-gray-800 rounded-lg p-3 text-center transition-transform duration-300 hover:scale-105"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  