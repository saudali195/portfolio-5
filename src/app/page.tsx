import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ScrollToTop from "./components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
