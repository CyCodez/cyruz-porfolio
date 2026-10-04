import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaTerminal,
  FaBolt,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNodeJs,
  FaReact,
  FaTimes,
  FaWhatsapp,
  FaServer,
  FaExternalLinkAlt,
  FaDownload,
  FaCheckCircle,
  FaSearch,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaFire,
  FaLayerGroup
} from "react-icons/fa";
import profile from "./assets/profile-pics.jpeg";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "NetworkLens",
    type: "NETWORK INTELLIGENCE",
    description:
      "I built this to work with IP address data from an API and turn it into something you can actually explore on a map. The Node/Express backend handles the API work while the React side presents the location data with Leaflet.",
    stack: ["React", "Node.js", "Express", "REST API", "Leaflet"],
    github: "https://github.com/CyCodez/NetworkLens",
    live: "https://networklenz.netlify.app/",
    visual: "network",
  },
  {
    number: "02",
    title: "CareFinder",
    type: "HEALTHCARE DISCOVERY",
    description:
      "A healthcare discovery app for finding nearby providers and working through a simple care-request flow. I built the interface in React and connected Firebase, Firestore and location services behind it.",
    stack: ["React", "Firebase", "Firestore", "Geoapify", "Leaflet"],
    github: "https://github.com/CyCodez/Carefinder-Application",
    live: "https://carefinder-application.web.app/",
    visual: "care",
  },
  {
    number: "03",
    title: "BankRecharge",
    type: "FINANCIAL SYSTEM",
    description:
      "A full-stack banking-style application I built to work through authentication, protected routes, wallet funding and transaction flows. The frontend talks to a Node/Express API backed by MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/CyCodez/BankRecharge-FullStack",
    live: "https://bankrecharge.netlify.app/",
    visual: "bank",
  },
  {
    number: "04",
    title: "Student Management System",
    type: "ACADEMIC PLATFORM",
    description:
      "A student management application for storing student records, results and GPA calculations. It gave me practical experience connecting a React interface to an Express API and MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/CyCodez/student_database_db",
    live: "https://student-database-frontend-elsx.onrender.com",
    visual: "school",
  },
  {
    number: "05",
    title: "Pizza Application",
    type: "INTERACTIVE WEB APPLICATION",
    description:
      "A React food-ordering interface where users can browse a menu and interact with their selections. I used it to strengthen my component structure, state management and responsive UI work.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/CyCodez/pizza-menu",
    live: "https://cy-pizza-app.netlify.app/",
    visual: "pizza",
  },
  {
    number: "06",
    title: "Travel List",
    type: "REACT APPLICATION",
    description:
      "A small React app for organising things to pack for a trip. It is simple by design, but it gave me more practice with state, reusable components and keeping UI interactions predictable.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/CyCodez/travel-app",
    live: "https://travel-list-app01.netlify.app",
    visual: "travel",
  },
  {
    number: "07",
    title: "Tourist Website",
    type: "RESPONSIVE WEBSITE",
    description:
      "One of my earlier frontend projects: a responsive tourism site where I focused on layout, navigation, content structure and making the experience work across screen sizes.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CyCodez/Tour-project",
    live: "https://tour-project-01.netlify.app/",
    visual: "tour",
  },
];

const skills = [
  {
    icon: <FaReact />,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive UI"],
  },
  {
    icon: <FaServer />,
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Business Logic",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Data",
    items: ["MongoDB", "Firestore", "Data Modelling", "CRUD", "Queries"],
  },
  {
    icon: <FaLayerGroup />,
    title: "Integration",
    items: ["Firebase", "Geoapify", "Leaflet", "API Integration", "Deployment"],
  },
];

/*
|--------------------------------------------------------------------------
| TECHNOLOGY CAROUSEL
|--------------------------------------------------------------------------
*/

const technologies = [
  {
    name: "React",
    icon: <FaReact />,
    className: "tech-react",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    className: "tech-javascript",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    className: "tech-node",
  },
  {
    name: "Express.js",
    icon: <FaServer />,
    className: "tech-express",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    className: "tech-mongodb",
  },
  {
    name: "Firebase",
    icon: <FaFire />,
    className: "tech-firebase",
  },
  {
    name: "REST APIs",
    icon: <FaCode />,
    className: "tech-api",
  },
  {
    name: "Git / GitHub",
    icon: <FaGithub />,
    className: "tech-github",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    className: "tech-html",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    className: "tech-css",
  },
  {
    name: "Postman",
    icon: <FaCode />,
    className: "tech-postman",
  },
  {
    name: "Netlify",
    icon: <FaCode />,
    className: "tech-netlify",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "skills",
      "projects",
      "contact",
    ];
    const onScroll = () => {
      const point = window.scrollY + 180;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && point >= el.offsetTop) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = ["about", "experience", "skills", "projects", "contact"];

  return (
    <div
      className="site"
      style={{ "--mx": `${mouse.x}%`, "--my": `${mouse.y}%` }}
    >
      <div className="cursor-glow" />
      <div className="noise" />

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">CU</span>
          <span className="brand-text">
            CYRUS<span>.</span>
          </span>
        </a>

        <nav>
          <a
            className={active === "home" ? "active" : ""}
            href="#home"
            onClick={closeMenu}
          >
            <span>00</span> HOME
          </a>
          {navItems.map((item, index) => (
            <a
              key={item}
              className={active === item ? "active" : ""}
              href={`#${item}`}
              onClick={closeMenu}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{" "}
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="status-line">
             AVAILABLE FOR OPPORTUNITIES
          </div>
          <div className="socials">
            <a
              href="https://github.com/CyCodez"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/uwaomacyrus/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:uwaomacyruz@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <span className="side-location">
            <span className="side-location-icon">
              <FaMapMarkerAlt />
            </span>{" "}
            Nigeria / Remote
          </span>
        </div>
      </aside>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <main className="content">
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="hero-copy reveal visible">
            <div className="micro-label">FULL-STACK SOFTWARE ENGINEER</div>
            <p className="hero-kicker">CYRUS UWAOMA</p>
            <h1>
              I BUILD
              <br />
              <span>WEB</span>
              <br />
              <span>APPLICATIONS.</span>
            </h1>
            <p className="hero-description">
              I build web applications with React, Node.js, Express and MongoDB. I enjoy working across the frontend and backend, solving the problems between them, and turning an idea into something people can actually use.
            </p>
            <div className="hero-actions">
              <a className="neon-button" href="#projects">
                VIEW MY PROJECTS <FaArrowRight />
              </a>
              <a className="ghost-button" href="/Cyrus-Uwaoma-CV.pdf" download>
                DOWNLOAD CV <FaDownload />
              </a>
            </div>
            <div className="hero-proof">
              <span><FaCheckCircle /> REACT + NODE.JS</span>
              <span><FaCheckCircle /> REST APIs</span>
              <span><FaCheckCircle /> MONGODB + SQL</span>
            </div>
          </div>

          <div className="hero-photo reveal visible">
            <div className="hero-photo-dots" />
            <div className="hero-photo-frame">
              <img
                src={profile}
                alt="Cyrus Uwaoma - Full-Stack Software Engineer"
              />
            </div>
            <div className="hero-photo-badge">
              <span>Working across</span>
              <strong>Frontend · Backend · Data</strong>
            </div>
          </div>

          <div className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-number">01 / ABOUT</div>
          <div className="section-heading reveal">
            <p>HOW I GOT HERE</p>
            <h2>
              I BUILD SOFTWARE
              <br />
              <span>FROM FRONTEND TO BACKEND.</span>
            </h2>
          </div>
          <div className="about-layout">
            <div className="about-copy reveal">
              <p className="lead">
                I’m a full-stack software engineer who enjoys understanding how an application works from end to end — from the interface a user sees to the API, database and logic behind it.
              </p>
              <p>
                I started with frontend development and moved into backend work because I wanted to understand what happens behind the interface. Today I work mainly with React, Node.js, Express and MongoDB, and I’m continuing to deepen my SQL and full-stack engineering knowledge through NIIT. I also hold a Diploma in Frontend Engineering from AltSchool Africa.
              </p>
              <p>
                My work at OurPixo has also shaped how I build. Working directly
                with customers means I’ve seen where people get stuck, what they
                ask for, and what makes a feature easier to use. So I don’t only
                ask whether the code works — I also think about what the
                experience feels like.
              </p>
            </div>
            <div className="about-stack reveal">
              <div className="stat-card">
                <strong>01</strong>
                <span>
                  FRONTEND
                  <br />
                  ENGINEERING
                </span>
                <FaReact />
              </div>
              <div className="stat-card">
                <strong>02</strong>
                <span>
                  BACKEND
                  <br />
                  SYSTEMS
                </span>
                <FaNodeJs />
              </div>
              <div className="stat-card">
                <strong>03</strong>
                <span>
                  DATA &<br />
                  APIs
                </span>
                <FaDatabase />
              </div>
              <div className="stat-card">
                <strong>04</strong>
                <span>
                  PRODUCT
                  <br />
                  EXPERIENCE
                </span>
                <FaBolt />
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-number">02 / EXPERIENCE</div>
          <div className="section-heading reveal">
            <p>WHAT I’VE WORKED ON</p>
            <h2>
              FROM BUILDING
              <br />
              <span>TO WORKING WITH USERS.</span>
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-line" />
            <article className="timeline-item reveal">
              <div className="timeline-marker">01</div>
              <div className="timeline-meta">CURRENT / FULL-STACK DEVELOPMENT</div>
              <h3>Full-Stack Software Engineering</h3>
              <p className="timeline-intro">
                I’ve been strengthening my backend engineering through full-stack projects — building APIs, working with databases, authentication and the parts of an application that sit behind the UI.
              </p>
              <div className="timeline-tags">
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>APIs</span>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-marker">02</div>
              <div className="timeline-meta">PROFESSIONAL / OURPIXO</div>
              <h3>Customer Experience & Product Operations</h3>
              <p className="timeline-intro">
                Worked directly with creatives and customers across onboarding, support, community and product feedback. I helped users get value from the platform and brought recurring problems and requests back into the product conversation.
              </p>
              <div className="timeline-tags">
                <span>Customer Experience</span>
                <span>Product</span>
                <span>Growth</span>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-marker">03</div>
              <div className="timeline-meta">FOUNDATION / ALTSCHOOL AFRICA</div>
              <h3>Frontend Engineering Diploma</h3>
              <p className="timeline-intro">
                Built the frontend foundation that I now use alongside my backend work, with projects covering responsive interfaces, React, JavaScript and API-connected applications.
              </p>
              <div className="timeline-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-number">03 / STACK</div>
          <div className="section-heading reveal">
            <p>WHAT I WORK WITH</p>
            <h2>
              THE TOOLS I USE
              <br />
              <span>TO BUILD.</span>
            </h2>
          </div>
          {/* TECHNOLOGY CAROUSEL */}

          <div className="technology-showcase reveal-scale">
            <div className="technology-showcase-header">
              <div>
                <span className="technology-label">TECHNOLOGY STACK</span>

                <h3>
                  Technologies I <span>work with.</span>
                </h3>

                <p>
                  The tools I use across frontend work, backend APIs, databases and the integrations that connect them.
                </p>
              </div>

              <div className="technology-status">
                <span className="status-dot"></span>
                <span>CURRENT STACK</span>
              </div>
            </div>

            <div className="technology-carousel">
              <button
                className="technology-arrow technology-arrow-left"
                aria-label="Previous technologies"
              >
                <FaArrowRight />
              </button>

              <div className="technology-window">
                <div className="technology-track">
                  {[...technologies, ...technologies].map(
                    (technology, index) => (
                      <div
                        className={`technology-card ${technology.className}`}
                        key={`${technology.name}-${index}`}
                      >
                        <div className="technology-icon">{technology.icon}</div>

                        <div className="technology-name">{technology.name}</div>

                        <div className="technology-line"></div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <button
                className="technology-arrow technology-arrow-right"
                aria-label="Next technologies"
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="technology-progress">
              <span></span>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card reveal" key={skill.title}>
                <div className="skill-icon">{skill.icon}</div>
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.items.join(" · ")}</p>
                </div>
                <FaArrowRight className="skill-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-number">04 / SELECTED WORK</div>
          <div className="section-heading reveal">
            <p>THINGS I’VE BUILT</p>
            <h2>
              A FEW PROJECTS
              <br />
              <span>I’VE WORKED ON.</span>
            </h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-grid reveal">
            <div>
              <div className="section-number">05 / CONTACT</div>
              <p className="contact-kicker">LET'S TALK</p>
              <h2>
                HAVE A PROJECT?
                <br />
                <span>LET'S TALK.</span>
              </h2>
              <p className="contact-copy">
                I’m open to software engineering opportunities, collaborations and interesting products to work on. If you’d like to talk about a project or role, reach out.
              </p>
              <a className="neon-button" href="mailto:uwaomacyruz@gmail.com">
                START A CONVERSATION <FaArrowRight />
              </a>
            </div>
            <div className="contact-panel">
              <div className="panel-label">DIRECT CHANNELS</div>
              <a href="mailto:uwaomacyruz@gmail.com">
                <FaEnvelope />
                <span>uwaomacyruz@gmail.com</span>
                <FaArrowRight />
              </a>
              <a
                href="https://www.linkedin.com/in/uwaomacyrus/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <span>linkedin.com/in/uwaomacyrus</span>
                <FaArrowRight />
              </a>
              <a
                href="https://github.com/CyCodez"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <span>github.com/CyCodez</span>
                <FaArrowRight />
              </a>
              <a href="tel:+2348147276128">
                <FaWhatsapp />
                <span>+234 814 727 6128</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <footer>
          <span>CYRUS UWAOMA</span>
          <span>FULL-STACK SOFTWARE ENGINEER</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className={`project-visual ${project.visual}`}>
        <div className="visual-frame">
          {project.visual === "network" && (
            <>
              <span className="map-dot d1" />
              <span className="map-dot d2" />
              <span className="map-dot d3" />
              <div className="network-lines" />
              <div className="visual-label">IP INTELLIGENCE / 8.8.8.8</div>
              <div className="visual-data">
                <b>MOUNTAIN VIEW</b>
                <span>37.3861° N / 122.0839° W</span>
              </div>
            </>
          )}
          {project.visual === "care" && (
            <>
              <div className="health-cross">+</div>
              <div className="care-card">
                <span>CARE FINDER</span>
                <b>Healthcare near you</b>
                <small>Providers · 2.4 km</small>
              </div>
              <div className="care-pin">⌖</div>
            </>
          )}
          {project.visual === "bank" && (
            <>
              <div className="bank-balance">
                <small>AVAILABLE BALANCE</small>
                <strong>₦ 248,500.00</strong>
                <span>+ 12.8% THIS MONTH</span>
              </div>
              <div className="bank-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </>
          )}
          {project.visual === "school" && (
            <>
              <div className="school-ui">
                <span>STUDENT DATABASE</span>
                <b>Academic Overview</b>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <small>GPA / RESULTS / RECORDS</small>
              </div>
              <div className="school-orb">◎</div>
            </>
          )}
          {project.visual === "pizza" && (
            <>
              <div className="pizza-ui">
                <span>PIZZA MENU</span>
                <b>Choose your favourite</b>
                <i>🍕</i>
                <small>Interactive ordering interface</small>
              </div>
            </>
          )}
          {project.visual === "travel" && (
            <>
              <div className="travel-ui">
                <span>TRAVEL LIST</span>
                <b>Things to pack</b>
                <div>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <small>React state management</small>
              </div>
            </>
          )}
          {project.visual === "tour" && (
            <>
              <div className="tour-ui">
                <span>TOURIST WEBSITE</span>
                <b>Explore new places</b>
                <div className="tour-horizon" />
                <small>Responsive web experience</small>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="project-info">
        <div className="project-top">
          <span>{project.number}</span>
          <span>{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.live} className="live-demo-btn" target="_blank" rel="noreferrer">
            LIVE DEMO <FaExternalLinkAlt />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            SOURCE <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
}

export default App;
