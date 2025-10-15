import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useDownload } from '../hooks/useDownload'

const Hero = () => {
  const ref = useScrollAnimation()
  const { downloadFile, isDownloading } = useDownload()
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast']

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  const handleCVDownload = async () => {
    // Try PDF first, fallback to text
    const pdfSuccess = await downloadFile('/Rutikanga_Elijah_CV.pdf', 'Rutikanga_Elijah_CV.pdf');
    
    if (!pdfSuccess) {
      // Fallback to text CV if PDF is not available
      downloadTextCV();
    }
  }

  const downloadTextCV = () => {
    const cvContent = `RUTIKANGA ELIJAH
Full Stack Developer & UI/UX Designer

CONTACT INFORMATION
Email: elijah.rutikanga@example.com
Phone: +250 78X XXX XXX
Location: Kigali, Rwanda
Portfolio: www.elijah-portfolio.com

PROFESSIONAL SUMMARY
Experienced Full Stack Developer with 3+ years of expertise in building scalable web applications. 

TECHNICAL SKILLS
• Frontend: React, JavaScript, TypeScript, HTML5, CSS3
• Backend: Node.js, Express, MongoDB, PostgreSQL
• Tools: Git, Docker, AWS, Figma

PROFESSIONAL EXPERIENCE
Senior Full Stack Developer | Tech Solutions Inc. | 2022 - Present
Frontend Developer | Digital Creations | 2020 - 2022

EDUCATION
Bachelor of Science in Computer Science
University of Rwanda | 2016 - 2020`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rutikanga_Elijah_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Rutikanga Elijah</span>
          </h1>
          <h2>
            I'm a <span className="typing-text">{displayText}</span>
            <span className="cursor">✏️</span>
          </h2>
          <p>
            Passionate about creating beautiful, functional, and user-friendly 
            digital experiences. I bring ideas to life through code and design.
          </p>
          <div className="hero-buttons">
            <button 
              className={`btn btn-primary ${isDownloading ? 'downloading' : ''}`}
              onClick={handleCVDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <div className="spinner"></div>
                  Downloading...
                </>
              ) : (
                <>
                  📄 Download CV
                </>
              )}
            </button>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-placeholder">
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
        src="/public/ele.jpg" // <-- Update this path to your actual image
        alt="Rutikanga"
        className="profile-img"
      />
    </span>
  </div>
</motion.div>
</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero