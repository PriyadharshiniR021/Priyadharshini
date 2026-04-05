import { useState, useEffect } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaJava,
  FaPython,
  FaCuttlefish,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaChartBar
} from "react-icons/fa";

import {
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiCanva,
  SiMysql
} from "react-icons/si";

const skillsData = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <FaCuttlefish /> }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> }
    ]
  },
  {
    title: "AI / ML",
    items: [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <FaChartBar /> }
    ]
  },
  {
    title: "Tools & DB",
    items: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "GitHub", icon: <FaGithub /> }
    ]
  }
];

const experiences = [
  {
    side: "right",
    date: "12.10.2025",
    title: "inFynd Aim 25 Hackathon",
    company: "1st Place · ₹25,000",
    desc: "Won the 36-hour Data Masters domain hackathon with innovative data-driven solutions. Oct 2025.",
    points: [
      "Designed modern UI projects",
      "Created prototypes",
      "Applied UX principles"
    ],
    tech: ["Hackathon"]
  },
  {
    side: "left",
    date: "16.12.2025",
    title: "NCIIT 2025 — Bannari Amman Institute",
    company: "Participation",
    desc: "Presented 'A Unified ML Framework for Dynamic Price Prediction in E-Commerce' at the 14th National Conference on Innovations in Information Technology. Dec 2025.",
    points: [
      "Built responsive pages",
      "Improved UI accuracy",
      "Cleared HackerRank round"
    ],
    tech: ["Research Paper"]
  },

];

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <>
      <section>
        <div className='d-md-block d-none'
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/hero.svg')",
            backgroundSize: "fit",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
        </div>
        <div className='d-block d-md-none'
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/hero1.svg')",
            backgroundSize: "fit",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
        </div>

      </section>
      <section>
        <div className='container-fluid py-5' >
          <div className='row'>
            <div className='col-md-4 text-center'>
              <img className='img-fluid' src="/about1.svg" alt="" />
            </div>
            <div className='col-md-8'>
              <div className="row mt-5">
                <div className="col-12" >
                  <h1>Hi, I'm <span className='primary-text-color'>Priyadharshini R</span> </h1>
                  <p className='justify'>I'm a motivated IT student at Dr. Mahalingam College of Engineering and Technology, Pollachi, with a CGPA
                    of 8.76. I'm passionate about building smart, scalable applications that create meaningful impact. <br />
                    From crafting responsive frontends with React to building AI/ML pipelines with Python, I love solving complex
                    problems with clean code and thoughtful design. My areas of interest span Web Development, UI/UX Design,
                    AI & Machine Learning, and Cloud Computing.</p>
                </div>
                <div className="col-md-4 mt-5 ">
                  <h4>EXPERIENCE</h4>
                  <div className="my-3">
                    <div className='my-2'>
                      <p className='fw-medium m-0 p-0'>Frontend Development Intern</p>
                      <p className='primary-text-color m-0 p-0'>Faraday Ozone, Coimbatore</p>
                      <p className='text-muted m-0 p-0'>Jun 2025 - Jun 2025</p>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className='my-2'>
                      <p className='fw-medium m-0 p-0'>Web Development Intern</p>
                      <p className='primary-text-color m-0 p-0'>URIHT Solutions, Namakkal</p>
                      <p className='text-muted m-0 p-0'>Dec 2024</p>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className='my-2'>
                      <p className='fw-medium m-0 p-0'>B.Tech Information Technology</p>
                      <p className='primary-text-color m-0 p-0'>Dr. MCET, Pollachi</p>
                      <p className='text-muted m-0 p-0'>2023 - 2027 · CGPA 8.76</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-5">
                  <h4>ACTIVITIES</h4>
                  <div className="my-3">
                    <div className='my-2'>
                      <p className='fw-medium m-0 p-0'>Co-curricular Coordinator</p>
                      <p className='primary-text-color m-0 p-0'>InfoBee Association</p>
                      <p className='text-muted m-0 p-0'>Organized technical events</p>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className='my-2'>
                      <p className='fw-medium m-0 p-0'>App Master Event Organizer</p>
                      <p className='primary-text-color m-0 p-0'>Technofete, Dr. MCET</p>
                      <p className='text-muted m-0 p-0'>Mar 2025</p>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className='my-2'>
                      <p className='fw-medium m-0 p-0'>Class Representative</p>
                      <p className='primary-text-color m-0 p-0'>Dr. MCET - 1st Year</p>
                      <p className='text-muted m-0 p-0'>2023 - 2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-5">
                  <h4>CONTACT</h4>
                  <div className="my-3">
                    <div className='my-2'>
                      <a href='https://github.com/PriyadharshiniR021' className='text-muted m-0 p-0'>https://github.com/PriyadharshiniR021</a>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className='my-2'>
                      <a href='https://www.linkedin.com/in/priyadharshini-r-b7a054276/' className='text-muted m-0 p-0'>https://www.linkedin.com/in/priyadharshini-r-b7a054276/</a>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className='my-2'>
                      <a href='mailto:priyaruby2005@gmail.com' className='text-muted m-0 p-0'>priyaruby2005@gmail.com</a>
                    </div>
                  </div>
                  <div className="my-3 w-100">
                    <a href="/resume.pdf" download className='primary-button px-3 py-2 w-100 rounded-1'>
                      Resume
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container py-5'>
          <h2 className="text-center mb-5 fw-light letter-spacing">
            PROJECTS
          </h2>
          <div className="row">
            <div className="col-md-3 p-0 m-0 project-card" style={{
              height: "90vh",
              backgroundImage: "url('/project1.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="overlay">
                <h4>RAG Chatbot</h4>
                <p>AI-powered chatbot using LlamaIndex & ChromaDB</p>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 project-card" style={{
              height: "90vh",
              backgroundImage: "url('/project2.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="overlay">
                <h4>Gemini Chatbot</h4>
                <p>React + Gemini API conversational UI</p>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 project-card" style={{
              height: "90vh",
              backgroundImage: "url('/project3.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="overlay">
                <h4>House Price ML</h4>
                <p>Linear regression, R² = 0.70</p>
              </div>
            </div>
            <div className="col-md-3 p-0 m-0 project-card" style={{
              height: "90vh",
              backgroundImage: "url('/project4.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="overlay">
                <h4>Kammavar Culture</h4>
                <p>The UI that shows the culture of tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-light letter-spacing">
            SKILLS
          </h2>

          <div className="row g-4">
            {skillsData.map((category, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="skill-card p-4 h-100">
                  <h5 className="text-center mb-4 text-uppercase">
                    {category.title}
                  </h5>

                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {category.items.map((skill, i) => (
                      <div className="skill-badge" key={i}>
                        <span className="icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="experience-section py-5">
        <div className="container">

          <div className="text-center" data-aos="fade-up">
            <h2 className="text-center mb-5 fw-light letter-spacing">
              ACHIEVEMENTS
            </h2>
          </div>

          <div className="timeline-container">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item ${exp.side}`}
                data-aos={exp.side === "left" ? "fade-right" : "fade-left"}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-content">



                  <div className="card custom-card">
                    <div className="card-body p-4">
                      <div>
                        <span className="badge custom-badge">
                          {exp.date}
                        </span>
                      </div>
                      <h5 className="fw-bold">{exp.title}</h5>
                      <p className="text-muted small">{exp.company}</p>

                      <p className="text-muted">{exp.desc}</p>

                      {/* <h6 className="fw-bold mt-3">Key Achievements:</h6> */}
                      {/* <ul className="text-muted">
                        {exp.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul> */}

                      <h6 className="fw-bold mt-3">Area:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className='bg-dark text-light'>
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-light letter-spacing">
            CERTIFICATIONS
          </h2>
          <div className="row">
            <div className="col-md-6 p-2">
              <div className='border rounded-1 p-2'>
                <h4>
                  Introduction to Industry 4.0
                </h4>
                <div className="my-3" >
                  <p className='p-0 m-0 primary-text-color' >NPTEL Elite · Jul–Oct</p>
                  <p className='p-0 m-0 primary-text-color'>2025</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className='border rounded-1 p-2'>
                <h4>
                  Environmental Impact Assessment
                </h4>
                <div className="my-3" >
                  <p className='p-0 m-0 primary-text-color' >NPTEL Elite · Jan–Apr</p>
                  <p className='p-0 m-0 primary-text-color'>2025</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className='border rounded-1 p-2'>
                <h4>
                  Introduction to C Programming
                </h4>
                <div className="my-3" >
                  <p className='p-0 m-0 primary-text-color' >NPTEL · Jan–Mar</p>
                  <p className='p-0 m-0 primary-text-color'>2024</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className='border rounded-1 p-2'>
                <h4>
                  Python Programming
                </h4>
                <div className="my-3" >
                  <p className='p-0 m-0 primary-text-color' >GTech · Jun–Jul</p>
                  <p className='p-0 m-0 primary-text-color'>2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-4 d-md-flex justify-content-between align-items-center">
          <h2 className='fw-bold'>PRIYADHARSHINI R</h2>
          <p>priyaruby2005@gmail.com</p>
        </div>
      </section>
    </>
  )
}

export default App
