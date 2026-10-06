import { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { projectsData } from './projectsData';
import './App.css';

const certsData = [
  {
    id: 'valiit-software-development',
    title: 'Vali Tarkvaraarendus!',
    institution: 'BCS Koolitus - Vali IT! Software Developer Reskilling Program',
    date: 'Issued October 2026 (240 Academic Hours)',
    imgSrc: '/cert-valiit-2026.png',
    alt: 'Vali IT! software development program certificate',
    tags: ['Java', 'Spring Boot', 'PostgreSQL / SQL', 'Database Design (ERD)', 'RESTful API', 'Vue.js', 'JavaScript', 'Swagger / OpenAPI', 'Unit Testing', 'Git', 'Jira / Confluence', 'Agile MVP', 'AI-Assisted Development (Claude Code)'],
  },
  {
    id: 'codecademy-front-end-engineer',
    title: 'Front-End Engineer',
    institution: 'Codecademy - Professional Certification',
    date: 'Issued April 2026',
    imgSrc: '/cert-codecademy-2026.png',
    alt: 'Codecademy Front-End Engineer certificate',
    tags: ['React', 'Redux Toolkit', 'React Router', 'JavaScript (ES6+)', 'Asynchronous JS', 'REST APIs', 'Node.js / Express', 'Web Accessibility (a11y)', 'Responsive Design', 'Git/GitHub', 'TDD (Jest, Vitest)', 'React Testing Library'],
  },
  {
    id: 'bcs-web-development-program',
    title: 'Naised veebiarendajaks!',
    institution: 'BCS Koolitus - Full Web Technology Program',
    date: 'Issued November 2025 (192 Academic Hours)',
    imgSrc: '/cert-bcs-2025.png',
    alt: 'BCS Koolitus web development certificate',
    tags: ['HTML5 / CSS3', 'JavaScript', 'PHP', 'MySQL', 'UI/UX Fundamentals', 'Prototyping', 'Agile / Scrum', 'Project Management'],
  },
];

export default function App() {
  const [activeCertImage, setActiveCertImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!activeCertImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCertImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCertImage]);

  return (
    <div className="portfolio-wrapper">
      <div
        aria-hidden="true"
        className="cursor-glow"
        style={{
          transform: `translate3d(${mousePos.x - 225}px, ${mousePos.y - 225}px, 0)`,
        }}
      />

      <div className="portfolio-container">
        <header className="hero-section">
          <p className="hero-eyebrow">Digital resume</p>
          <h1>Tiina Reintop</h1>
          <p className="hero-description">
            Junior software developer with a background in UX-focused design and digital marketing.
            I recently completed the Vali IT! program, focusing on back-end development with Java and Spring Boot.
            I am <span className="highlight-text">looking for an internship or junior developer role</span> in front-end, back-end
            or full-stack development.
          </p>
          <ul className="hero-facts">
            <li>Available immediately</li>
            <li>Estonian, English</li>
            <li>On-site, hybrid or remote</li>
          </ul>
          <div className="contact-links hero-links">
            <a href="https://github.com/tiina-re" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub className="link-icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tiina-reintop/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="link-icon" /> LinkedIn
            </a>
            <a href="mailto:tiina.reintop@gmail.com" className="contact-link">
              <FaEnvelope className="link-icon" /> Email
            </a>
          </div>
        </header>

        <hr className="section-divider" />

        <section className="projects-section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <article key={project.id} className="project-card">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  {project.contribution && (
                    <p className="project-contribution">
                      <span className="project-contribution-label">My part:</span> {project.contribution}
                    </p>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub className="link-icon" /> View on GitHub
                    </a>
                  )}
                </div>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="section-divider-large" />

        <section className="certifications-section" aria-labelledby="certifications-title">
          <h2 id="certifications-title" className="section-title">Education & Certifications</h2>
          <div className="certs-grid">
            {certsData.map((cert) => (
              <article key={cert.id} className="cert-card">
                <div>
                  <h3>{cert.title}</h3>
                  <p className="cert-institution">{cert.institution}</p>
                  <p className="cert-date">{cert.date}</p>
                  <div className="tags cert-tags">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <button
                  className="cert-preview-button"
                  type="button"
                  onClick={() => setActiveCertImage(cert.imgSrc)}
                  aria-label={`Open ${cert.title} certificate preview`}
                >
                  <img src={cert.imgSrc} alt={cert.alt} className="cert-image" />
                </button>
              </article>
            ))}
          </div>
        </section>

        <hr className="section-divider-large" />

        <footer className="contact-section" aria-labelledby="contact-title">
          <h2 id="contact-title" className="section-title">Get In Touch</h2>
          <p>Let's collaborate. Feel free to reach out via email or connect on social platforms.</p>
          <div className="contact-links">
            <a href="mailto:tiina.reintop@gmail.com" className="contact-link">
              <FaEnvelope className="link-icon" /> Email
            </a>
            <a href="https://www.linkedin.com/in/tiina-reintop/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="link-icon" /> LinkedIn
            </a>
            <a href="https://github.com/tiina-re" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub className="link-icon" /> GitHub
            </a>
          </div>
        </footer>
      </div>

      {activeCertImage && (
        <div
          className="modal-overlay"
          onClick={() => setActiveCertImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close-button" type="button" onClick={() => setActiveCertImage(null)} aria-label="Close certificate preview">
              ×
            </button>
            <img className="modal-image" src={activeCertImage} alt="Expanded credential preview" />
          </div>
        </div>
      )}
    </div>
  );
}
