import React, { useEffect, useState } from 'react';
import './App.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
];

const skills = [
  { icon: 'fas fa-code', title: 'Programming', description: 'PL/SQL, OOP, C, HTML, CSS' },
  { icon: 'fas fa-database', title: 'Database Management', description: 'Database design and management' },
  { icon: 'fas fa-cogs', title: 'Software Engineering', description: 'Testing methodologies, defect management' },
  { icon: 'fas fa-chart-line', title: 'EBM', description: 'Data analysis and electronic billing' }
];

const projects = [
  {
    title: 'Biometric Transaction System',
    description: 'A secure transaction system that uses biometric authentication for enhanced security and user verification in financial transactions.',
    tech: ['PL/SQL', 'Database', 'Biometrics', 'Security'],
    url: 'https://github.com/Evelyne364154/Biometric_based_transaction_system_26642_Evelyne_Umwali',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'Biometric Transaction System'
  },
  {
    title: 'PL/SQLicious',
    description: 'A collection of advanced PL/SQL scripts and database solutions demonstrating complex querying, stored procedures, and database optimization techniques.',
    tech: ['PL/SQL', 'Oracle', 'Database', 'Optimization'],
    url: 'https://github.com/Evelyne364154/PL-SQLicious',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
    alt: 'PL/SQLicious'
  }
];

const experience = [
  {
    title: 'Sales Manager',
    date: '2023 - 2025',
    company: 'Fit Spare parts LTD',
    details: 'Managed sales operations and customer relationships at Fit Spare parts LTD, developing valuable business and communication skills. Gained experience in team management, customer service, and business operations.'
  }
];

const education = [
  {
    title: "Bachelor's Degree in Software Engineering",
    date: '2023 - Present',
    institution: 'Adventist University of Central Africa (AUCA)',
    location: 'Kigali-Gishushu',
    details: 'Currently pursuing my undergraduate degree with focus on software development, database management, and software testing methodologies.'
  },
  {
    title: "A' Level - Mathematics, Computer Science, Economics",
    date: '2019 - 2022',
    institution: "Ecole Secondaire Stella Matutina",
    location: 'Shyorongi, Northern Province',
    details: 'Completed advanced level studies with focus on technical subjects that built foundation for software engineering career.'
  },
  {
    title: "O' Level",
    date: '2016 - 2018',
    institution: 'Groupe Scolaire Notre Dame De Lourde',
    location: 'Ruhango, Byimana',
    details: 'Completed ordinary level studies with strong foundation in sciences and mathematics.'
  }
];

const certificates = [
  {
    icon: 'fas fa-certificate',
    title: 'Certifications',
    items: ['British Council Certified (2022)', 'Electronic Billing Machine (EBM)', 'Software Testing Fundamentals']
  },
  {
    icon: 'fas fa-language',
    title: 'Languages',
    items: ['Kinyarwanda - Native Proficiency', 'English - Advanced Professional Proficiency', 'French - Intermediate Communication Skills']
  }
];

const contactMethods = [
  { icon: 'fas fa-envelope', title: 'Email: umwalievelyne0@gmail.com' },
  { icon: 'fas fa-phone', title: 'Phone: +250 790 364 154' },
  { icon: 'fas fa-map-marker-alt', title: 'Location: Kigali, Rwanda' },
  { icon: 'fas fa-clock', title: 'Availability: Open to internships and part-time opportunities' }
];

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const fadeElems = document.querySelectorAll('.fade-in');
    const fadeOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const fadeOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      });
    }, fadeOptions);

    fadeElems.forEach((elem) => {
      elem.style.opacity = '0';
      elem.style.transform = 'translateY(20px)';
      elem.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      fadeOnScroll.observe(elem);
    });

    return () => fadeOnScroll.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Thank you for your message, ${form.name}! I'll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav>
            <div className="logo">E<span>.</span></div>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-text">
              <h1>Umwali Dusenge Evelyne</h1>
              <p>Software Engineering Student | Problem Solver | Tech Enthusiast</p>
              <p>I'm a motivated and enthusiastic software engineering student with strong communication and teamwork abilities, eager to build professional experience while pursuing my undergraduate degree.</p>
              <div className="hero-btns">
                <a href="#contact" className="btn">Get In Touch</a>
                <a href="#projects" className="btn btn-outline">View Projects</a>
              </div>
            </div>
            <div className="profile-image">
              <img src="/pic4.png" alt="Umwali Dusenge Evelyne" />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="fade-in">About Me</h2>
          <div className="about-content">
            <div className="fade-in">
              <p>I am a student at Adventist University of Central Africa (AUCA). I have skills about prioritizing defects during testing which is important for efficient software development. Testing methodologies which provide frameworks for defect management.</p>
              <p>I have completed courses in software engineering, database management, programming languages like PL/SQL, OOP and C and more. I'm now looking for a software engineering role to put my skills into practice and grow as a developer. I'm a quick learner and eager to expand my knowledge.</p>
            </div>
            <div className="fade-in">
              <h3>My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div className="skill-item" key={skill.title}>
                    <i className={skill.icon}></i>
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="fade-in">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card fade-in" key={project.title}>
                <div className="project-image">
                  <img src={project.img} alt={project.alt} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tag) => (
                      <span className="tech-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.url} className="project-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="fade-in">Work Experience</h2>
          {experience.map((item) => (
            <div className="experience-item fade-in" key={item.title}>
              <h3>{item.title}</h3>
              <p className="experience-date">{item.date}</p>
              <p><strong>{item.company}</strong></p>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="fade-in">Education</h2>
          <div className="education-timeline">
            {education.map((item) => (
              <div className="education-item fade-in" key={item.title}>
                <div className="education-content">
                  <h3>{item.title}</h3>
                  <p className="experience-date">{item.date}</p>
                  <p><strong>{item.institution}</strong></p>
                  <p>{item.location}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="certificates">
        <div className="container">
          <h2 className="fade-in">Certificates & Languages</h2>
          <div className="certificates-container">
            {certificates.map((certificate) => (
              <div className="certificate-item fade-in" key={certificate.title}>
                <i className={certificate.icon}></i>
                <h3>{certificate.title}</h3>
                {certificate.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="fade-in">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              {contactMethods.map((method) => (
                <div className="contact-item fade-in" key={method.title}>
                  <i className={method.icon}></i>
                  <div>
                    <h4>{method.title}</h4>
                    <p>{method.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <form className="contact-form fade-in" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" value={form.name} required placeholder="Your Name" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" value={form.email} required placeholder="Your Email" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" value={form.message} required placeholder="How can I help you?" onChange={handleChange} />
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Evelyne</h3>
              <p>A motivated software engineering student with strong communication and teamwork abilities. Currently seeking opportunities to apply my skills and grow as a professional developer.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Information</h3>
              <p><i className="fas fa-envelope"></i> umwalievelyne0@gmail.com</p>
              <p><i className="fas fa-phone"></i> +250 790 364 154</p>
              <p><i className="fas fa-map-marker-alt"></i> Kigali, Rwanda</p>
              <div style={{ marginTop: '20px' }}>
                <a href="https://www.linkedin.com/in/umwari-evelyne-807b17349/" style={{ color: '#fff', marginRight: '15px', fontSize: '1.2rem' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Evelyne364154" style={{ color: '#fff', marginRight: '15px', fontSize: '1.2rem' }}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Umwali Dusenge Evelyne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
