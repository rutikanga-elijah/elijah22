import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Hello! I'm Elijah</h3>
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating digital solutions that make a difference in people's lives.
            </p>
            <p>
              With over 3 years of experience in web development, I've worked on various 
              projects ranging from simple landing pages to complex web applications.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-placeholder">
              <span>
<motion.div 
  className="hero-image"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="profile-placeholder">
    <span>
      <img 
        src="/public/ele.jpg" // <-- Put your image in public/assets/profile.jpg
        alt="Rutikanga Elijah Profile"
        className="profile-img"
      />
    </span>
  </div>
</motion.div>
</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About