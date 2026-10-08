import { useState } from "react";
import { experience, profile, projects, type Project } from "./content";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { CaseStudy } from "./components/CaseStudy";
import { Contact } from "./components/Contact";
import { Icon } from "./components/Icon";
import { TrainingProject } from "./components/TrainingProject";
import { TechStack } from "./components/TechStack";
import { ProjectMontage } from "./components/ProjectMontage";
const services = [
  [
    "layers",
    "Business websites",
    "A clear, professional online home for your business, with the right details in the right place.",
  ],
  [
    "branch",
    "Website redesigns",
    "A fresh look, clearer navigation and a better experience for your visitors.",
  ],
  [
    "code",
    "Responsive development",
    "Websites that feel at home on phones, tablets and desktops.",
  ],
  [
    "database",
    "Website maintenance",
    "Content updates, interface fixes and care for your existing website.",
  ],
] as const;
export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <section id="work" className="work section-pad">
          <div className="container">
            <div className="work-intro">
              <div className="work-intro-copy">
                <span className="eyebrow">Featured projects</span>
                <h2>
                  Real ideas.
                  <br />
                  <em>Working websites.</em>
                </h2>
                <p>
                  A selection of client work, portfolio concepts and full-stack
                  training projects. Explore the design and the code behind each
                  one.
                </p>
                <a className="text-link" href="#project-details">
                  Explore the projects <span aria-hidden="true">↗</span>
                </a>
              </div>
              <ProjectMontage />
            </div>
            <div id="project-details" className="project-grid">
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
        <TechStack />
        <section id="about" className="about section-pad">
          <div className="container">
            <span className="eyebrow">03 / Behind the work</span>
            <div className="about-grid">
              <div className="about-heading">
                <h2>
                  Creative mind.
                  <br />
                  <em>Practical solutions.</em>
                </h2>
                <span className="handwritten">
                  Same focus. Bigger possibilities. ↗
                </span>
              </div>
              <div className="about-copy">
                <p>
                  I’m Izel, a software and web developer based in Johannesburg.
                  I work with React, Node.js and Django, building the interfaces
                  people use and the systems behind them.
                </p>
                <p>
                  My background includes freelance technical support and remote
                  operations. My freelance work included debugging and
                  troubleshooting; at PBMS, I coordinated schedules,
                  communications and task tracking.
                </p>
                <p>
                  I’ve completed IBM’s Full Stack Software Developer
                  Professional Certificate, and I’m looking for a junior
                  developer role where I can contribute and keep learning. I
                  also build websites for small businesses.
                </p>
              </div>
            </div>
            <div className="about-photo">
              <img
                src="./images/workspace-detail.webp"
                alt="Purple-lit developer workspace with a monitor, leafy plant and books"
                width="1200"
                height="800"
                loading="lazy"
              />
            </div>
            <div className="about-bottom">
              <span>
                <Icon name="location" size={16} />
                {profile.location}
              </span>
              <span className="mono">
                THOUGHTFUL WEBSITES. PRACTICAL SOFTWARE.
              </span>
              <a className="text-link" href="./Izel_Bianchina_CV.pdf" download>
                Download my CV <Icon name="download" size={15} />
              </a>
            </div>
          </div>
        </section>
        <section id="experience" className="experience section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">04 / Experience & education</span>
                <h2>
                  The work behind
                  <br />
                  the developer<span>.</span>
                </h2>
              </div>
              <p>
                Professional employment, freelance work and independent
                learning. Each with its own place.
              </p>
            </div>
            <div className="experience-table">
              {experience.map((item, index) => (
                <article className="experience-row" key={item.title}>
                  <div className="experience-index mono">0{index + 1}</div>
                  <div className="experience-meta">
                    <span className="experience-type">{item.kind}</span>
                    <span className="experience-date">{item.dates}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="organisation">{item.organisation}</p>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
              <article className="experience-row education">
                <div className="experience-index mono">04</div>
                <div className="experience-meta">
                  <span className="experience-type">Education</span>
                  <span className="experience-date">Completed 2026</span>
                </div>
                <div>
                  <h3>
                    Full Stack Software Developer Professional Certificate
                  </h3>
                  <p className="organisation">IBM</p>
                </div>
                <p>
                  A completed 15-course programme covering full-stack
                  development and cloud technologies.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="services" className="services section-pad">
          <div className="container">
            <div className="services-heading">
              <span className="eyebrow">05 / For small businesses</span>
              <h2>
                Websites that
                <br />
                <em>work for you.</em>
              </h2>
              <p>
                A clear online home for what you do, built around the people you
                want to reach.
              </p>
            </div>
            <div className="service-grid">
              {services.map(([icon, title, description], i) => (
                <article key={title}>
                  <div className="service-top">
                    <Icon name={icon} size={24} />
                    <span className="mono">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <a className="button primary" href="#contact">
              Let’s work together <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section id="github" className="github section-pad">
          <div className="container github-grid">
            <div>
              <span className="eyebrow">06 / Source code</span>
              <Icon name="github" size={42} />
              <h2>
                Beyond
                <br />
                the interface<span>.</span>
              </h2>
              <p>
                The components, logic and decisions behind the finished work.
              </p>
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                izelbia1-lgtm <Icon name="external" size={15} />
              </a>
            </div>
            <div className="repo-list">
              <div className="repo-head mono">
                <Icon name="branch" size={15} /> SELECTED REPOSITORIES
              </div>
              {[
                ...projects.map((p) => ({
                  name: p.repository.split("/").pop(),
                  url: p.repository,
                  type: p.category,
                })),
                {
                  name: "fullstack-saas-app",
                  url: `${profile.github}/fullstack-saas-app`,
                  type: "Training / capstone project",
                },
              ].map((repo) => (
                <a
                  className="repository-card"
                  href={repo.url}
                  key={repo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="code" size={18} />
                  <div>
                    <h3>{repo.name}</h3>
                    <span>{repo.type}</span>
                  </div>
                  <Icon name="external" size={17} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home" aria-label="Izel Bianchina home">
          Izel Bianchina<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Izel Bianchina
          <br />
          Software & Web Developer
        </p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <CaseStudy project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
