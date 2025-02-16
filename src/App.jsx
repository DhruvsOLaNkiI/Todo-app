import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Background3D from './components/Background3D'
import AnimatedText from './components/AnimatedText'
import SkillCard from './components/SkillCard'
import ProjectImageCarousel from './components/ProjectImageCarousel'

// Social Media Links Configuration
const socialMediaLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  instagram: "https://instagram.com/your-username",
  twitter: "https://twitter.com/your-username",
  email: "your.email@example.com"
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.pageYOffset / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add your projects here
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project",
      demoLink: "https://dhruvsolankii.github.io/owngame2_dice/",
      codeLink: "https://github.com/DhruvsOLaNkiI/owngame2_dice.git",
      images: [
        "/images/project1-1.jpg",
        // "/images/project1-2.jpg",
        // "/images/project1-3.jpg"
      ],
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      demoLink: "https://your-project2-demo.com",
      codeLink: "https://github.com/yourusername/project2",
      images: [
        "/images/project2-1.jpg",
        "/images/project2-2.jpg",
        "/images/project2-3.jpg"
      ],
      technologies: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      title: "Project 3",
      description: "Description of your third project",
      demoLink: "https://minima-store-dhruv.netlify.app/",
      codeLink: "https://github.com/DhruvsOLaNkiI/Minimal-store.git",
      images: [
        "/images/project3-1.jpg",
        "/images/project3-2.jpg",
        "/images/project3-3.jpg"
      ],
      technologies: ["React js", "Tailwindcss", "Html"]
    }
    ,
    {
      title: "Project 3",
      description: "Description of your third project",
      demoLink: "https://your-project3-demo.com",
      codeLink: "https://github.com/yourusername/project3",
      images: [
        "/images/project3-1.jpg",
        "/images/project3-2.jpg",
        "/images/project3-3.jpg"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma"]
    }
  ]

  const skills = [
    { skill: 'React', icon: '⚛️', percentage: 90 },
    { skill: 'JavaScript', icon: '🟨', percentage: 85 },
    { skill: 'Node.js', icon: '🟩', percentage: 80 },
    { skill: 'TailwindCSS', icon: '🎨', percentage: 95 },
    { skill: 'Three.js', icon: '🎮', percentage: 75 },
    { skill: 'TypeScript', icon: '📘', percentage: 85 },
    { skill: 'Python', icon: '🐍', percentage: 80 },
    { skill: 'Git', icon: '📦', percentage: 85 },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-primary/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-textPrimary"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-textSecondary hover:text-secondary transition"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-tertiary"
          >
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="block px-4 py-2 text-textSecondary hover:text-secondary"
                whileHover={{ x: 5 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Background3D />
        </div>
        <div className="text-center relative z-10 bg-primary/30 p-8 rounded-lg backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-secondary"
            >
              <img
                src="/images/your-photo.jpg" // Add your photo here
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <AnimatedText
              text="Hi, I'm Your Name"
              className="text-4xl md:text-6xl font-bold mb-4"
            />
            <AnimatedText
              text="Full Stack Developer"
              className="text-xl md:text-2xl text-textSecondary mb-8"
            />
            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary/10 transition inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/90 transition inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedText
            text="About Me"
            className="text-3xl font-bold mb-8"
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-textSecondary">
                Hello! I'm a passionate developer who loves creating beautiful and functional web applications.
                I focus on writing clean, elegant, and efficient code.
              </p>
              <p className="text-textSecondary">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
              <div className="flex gap-6 mt-6">
                <motion.a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 group"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute bg-primary text-secondary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 -translate-y-8 transform transition-all duration-200">GitHub</span>
                </motion.a>
                <motion.a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 group relative"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="absolute bg-primary text-secondary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 -translate-y-8 transform transition-all duration-200">LinkedIn</span>
                </motion.a>
                <motion.a
                  href={socialMediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 group relative"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="absolute bg-primary text-secondary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 -translate-y-8 transform transition-all duration-200">Instagram</span>
                </motion.a>
                <motion.a
                  href={socialMediaLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 group relative"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="absolute bg-primary text-secondary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 -translate-y-8 transform transition-all duration-200">Twitter</span>
                </motion.a>
                <motion.a
                  href={`mailto:${socialMediaLinks.email}`}
                  className="text-secondary hover:text-secondary/80 group relative"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="absolute bg-primary text-secondary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 -translate-y-8 transform transition-all duration-200">Email</span>
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <div className="relative group">
                <div className="w-64 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/images/your-photo.jpg" // Add your photo here
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-primary">
        <div className="container mx-auto">
          <AnimatedText
            text="My Projects"
            className="text-3xl font-bold mb-12 text-center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-primary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-secondary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectImageCarousel images={project.images} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-textPrimary">{project.title}</h3>
                  <p className="text-textSecondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-primary px-4 py-2 rounded hover:bg-secondary/90 transition flex-1 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary/10 transition flex-1 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedText
            text="Skills"
            className="text-3xl font-bold mb-8"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-tertiary">
        <div className="container mx-auto max-w-2xl">
          <AnimatedText
            text="Get In Touch"
            className="text-3xl font-bold mb-8 text-center"
          />
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-lg bg-primary border border-secondary/20 focus:border-secondary outline-none"
              />
            </div>
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-lg bg-primary border border-secondary/20 focus:border-secondary outline-none"
              />
            </div>
            <div>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                placeholder="Message"
                rows="4"
                className="w-full p-2 rounded-lg bg-primary border border-secondary/20 focus:border-secondary outline-none"
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-secondary text-primary font-bold py-2 rounded-lg hover:bg-secondary/90 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-textSecondary">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          2024 Your Name. All rights reserved.
        </motion.p>
      </footer>
    </div>
  )
}

export default App
