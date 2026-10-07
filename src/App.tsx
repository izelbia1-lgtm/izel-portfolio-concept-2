import { useState } from "react";
import { experience, profile, projects, skills, type Project } from "./content";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { CaseStudy } from "./components/CaseStudy";
import { Contact } from "./components/Contact";
import { Icon } from "./components/Icon";
import { TrainingProject } from "./components/TrainingProject";

const skillIcons = ["code", "layers", "database", "branch"] as const;
const services = [
  [
    "Business websites & redesigns",
    "A clear structure, considered design, and space to tell your story.",
  ],
  [
    "Responsive development",
    "Layouts that feel comfortable on phones, tablets and desktops.",
  ],
  [
    "Enquiries & connections",
    "Contact and quote functionality, with WhatsApp integration when you need it.",
  ],
  ["Launch essentials", "Basic SEO, accessible foundations and deployment."],
];

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero onOpen={setSelected} />
        <section id="work" className="work section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / Selected work</span>
                <h2>
                  Real projects.
                  <br />
                  Real <em>solutions.</em>
                </h2>
              </div>
              <p>
                Client websites and independent concepts.
                <br />A look at the interfaces, features and code
                <br className="desktop-break" /> that bring them together.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={setSelected}
                />
              ))}
            </div>
            <TrainingProject />
          </div>
        </section>
        <section id="skills" className="skills section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">02 / Technical toolkit</span>
                <h2>Tools I work with.</h2>
              </div>
              <p>
                Technologies used across my projects and training.
                <br />
                From the interface to the systems behind it.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.name}>
                  <div className="skill-top">
                    <span className="skill-icon">
                      <Icon name={skillIcons[index]} size={23} />
                    </span>
                    <span className="mono">0{index + 1}</span>
                  </div>
                  <h3>
                    {group.name === "Tools & training"
                      ? "Tools & deployment"
                      : group.name}
                  </h3>
                  <ul className="tech-chips">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  {group.training && (
                    <div className="training-note">
                      <span>IBM programme exposure</span>
                      <ul className="tech-chips">
                        {group.training.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
            <div className="stack-note">
              <Icon name="code" size={18} />
              <span>
                Thoughtful interfaces. Connected systems. Practical
                problem-solving.
              </span>
            </div>
          </div>
        </section>
        <section id="experience" className="experience section-pad container">
          <div className="experience-heading">
            <span className="eyebrow">03 / Experience & learning</span>
            <h2>
              A foundation
              <br />
              to build on.
            </h2>
            <p>
              Professional work, independent development and continued learning.
            </p>
            <a className="text-link" href="./Izel_Bianchina_CV.pdf" download>
              <Icon name="download" size={16} />
              Download my CV
            </a>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article
                key={item.title}
                className={`timeline-item experience-${index}`}
              >
                <div className="timeline-meta">
                  <span className="experience-type">{item.kind}</span>
                  <span>{item.dates}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="organisation">{item.organisation}</p>
                <p>{item.description}</p>
              </article>
            ))}
            <article className="timeline-item education">
              <div className="timeline-meta">
                <span className="experience-type">Education</span>
                <span>Completed 2026</span>
              </div>
              <h3>
                Full Stack Software Developer
                <br />
                Professional Certificate
              </h3>
              <p className="organisation">IBM</p>
              <p>
                A completed 15-course programme covering full-stack development
                and cloud technologies.
              </p>
            </article>
          </div>
        </section>
        <section id="about" className="about section-pad">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="eyebrow">04 / The person behind the code</span>
              <h2>
                Curious. Practical.
                <br />
                Always building.
              </h2>
              <p>
                I’m Izel, a software and web developer based in Johannesburg. I
                work with React, Node.js and Django, building the interfaces
                people use and the systems behind them.
              </p>
              <p>
                My background includes freelance technical support and remote
                operations. My freelance work included debugging and
                troubleshooting; at PBMS, I coordinated schedules,
                communications and task tracking.
              </p>
              <p>
                I’ve completed IBM’s Full Stack Software Developer Professional
                Certificate, and I’m looking for a junior developer role where I
                can contribute and keep learning. I also build websites for
                small businesses.
              </p>
              <a className="text-link" href="#contact">
                Let’s start a conversation <Icon name="mail" size={16} />
              </a>
            </div>
            <div className="about-profile">
              <div className="profile-intro">
                <img
                  src="./images/izel.webp"
                  alt="Izel Bianchina"
                  width="259"
                  height="259"
                  loading="lazy"
                />
                <div>
                  <span className="mono">HELLO, I’M</span>
                  <p>
                    Izel Bianchina<span>Software & web developer</span>
                  </p>
                </div>
              </div>
              <div className="profile-code">
                <div className="code-tab">
                  <Icon name="code" size={15} />
                  about.ts
                </div>
                <pre>
                  <code>
                    <span className="syntax-key">const</span> developer = {"{"}
                    {"\n"} name:{" "}
                    <span className="syntax-value">"Izel Bianchina"</span>,
                    {"\n"} basedIn:{" "}
                    <span className="syntax-value">"Johannesburg"</span>,{"\n"}{" "}
                    builds: [{"\n"}{" "}
                    <span className="syntax-value">"Websites"</span>,{"\n"}{" "}
                    <span className="syntax-value">
                      "Full-stack applications"
                    </span>
                    {"\n"} ]{"\n"}
                    {"}"};
                  </code>
                </pre>
                <div className="profile-code-footer">
                  <Icon name="branch" size={14} />
                  <span>A little about the developer.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-pad">
          <div className="container services-grid">
            <div>
              <span className="eyebrow">05 / For small businesses</span>
              <h2>Need a website that actually works for your business?</h2>
              <p>
                A clear online home for what you do, built around the people you
                want to reach.
              </p>
              <a className="button light" href="#contact">
                Let’s work together <Icon name="code" size={17} />
              </a>
              <div className="service-signature" aria-hidden="true">
                &lt;your-business /&gt;
              </div>
            </div>
            <div className="service-list">
              {services.map(([title, copy], index) => (
                <article key={title}>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="github" className="github section-pad container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">06 / Beyond the browser</span>
              <h2>Explore the code.</h2>
            </div>
            <a
              className="button secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={18} />
              View my GitHub profile
            </a>
          </div>
          <div className="repo-panel">
            <div className="repo-panel-head">
              <span>
                <Icon name="github" size={18} />
                izelbia1-lgtm <span className="repo-divider">/</span> selected
                repositories
              </span>
              <Icon name="branch" size={17} />
            </div>
            <a
              className="repository-card capstone-repo"
              href={`${profile.github}/fullstack-saas-app`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="repo-symbol">
                <Icon name="code" size={25} />
              </span>
              <div>
                <span className="eyebrow">Training / capstone project</span>
                <h3>fullstack-saas-app</h3>
                <p>
                  A training application with a React frontend, Django
                  authentication and API views, and an Express / MongoDB
                  service. Explore the repository for the implementation.
                </p>
                <div className="repo-tech">
                  React · Python · Django · Express · MongoDB
                </div>
              </div>
              <Icon name="external" size={18} />
            </a>
            <div className="repository-grid">
              {projects.map((project) => (
                <a
                  className="repository-card"
                  key={project.id}
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <Icon name="branch" size={19} />
                    <h3>
                      {project.id === "odette"
                        ? "odette-hair-studio"
                        : project.id === "evergreen"
                          ? "evergreen-outdoor-living"
                          : "flowpro-plumbing"}
                    </h3>
                    <p>{project.category}</p>
                    <span className="repo-language">TypeScript</span>
                  </div>
                  <Icon name="external" size={14} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="container footer">
        <div>
          <a className="wordmark" href="#home">
            izel<span>.</span>
          </a>
          <p>Izel Bianchina · Software & web developer</p>
        </div>
        <p>© {new Date().getFullYear()} Izel Bianchina</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#home">Back to top</a>
        </div>
      </footer>
      <CaseStudy project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
