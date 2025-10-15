import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const ref = useScrollAnimation()

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'PHP'],
      image: '💹'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      technologies: ['React', 'Firebase', 'BACKEND '],
      image: '📋'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      image: '🌤️'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with dark mode',
      technologies: ['React', 'Vite', 'Framer Motion'],
      image: '💼'
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
          <p>My recent developed recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.image}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="btn btn-small">Live Demo</button>
                  <button className="btn btn-small btn-outline">Source Code</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects