import { profile, projects, type Project } from "../content";
import { Icon } from "./Icon";

export function Hero({ onOpen }: { onOpen: (project: Project) => void }) {
  const preview = projects.find((project) => project.id === "evergreen")!;
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-role">
            <Icon name="code" size={19} /> Software & web developer
          </p>
          <h1>
            Izel
            <br />
            Bianchina<span>.</span>
          </h1>
          <p className="hero-headline">
            Building modern websites and practical software for real-world
            problems.
          </p>
          <p className="hero-intro">
            From small-business websites to full-stack applications, I build
            interfaces people can use and the systems behind them.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View my work <Icon name="external" size={16} />
            </a>
            <a
              className="button secondary"
              href="./Izel_Bianchina_CV.pdf"
              download
            >
              <Icon name="download" size={17} />
              Download CV
            </a>
          </div>
          <div className="hero-links">
            <span>
              <Icon name="location" size={15} />
              {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={17} />
              GitHub
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={17} />
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="development-scene">
          <div className="scene-label">
            <span className="mono">FROM COMPONENTS TO REAL EXPERIENCES</span>
            <span aria-hidden="true">01 / UI</span>
          </div>
          <div className="scene-grid" aria-hidden="true" />
          <button
            className="hero-preview"
            onClick={() => onOpen(preview)}

          >
            <span className="browser-chrome">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>evergreen-outdoor-living</span>
              <Icon name="external" size={13} />
            </span>
            <img
              src="./images/evergreen.webp"
              srcSet="./images/evergreen-640.webp 640w, ./images/evergreen.webp 1440w"
              sizes="(max-width: 600px) 85vw, (max-width: 900px) 65vw, 43vw"
              alt="Evergreen Outdoor Living website showing its garden and pool services interface"
              width="1440"
              height="1000"
              fetchPriority="high"
            />
            <span className="preview-caption">
              <span>Evergreen Outdoor Living</span>
              <span>Portfolio demo</span><span className="sr-only">Explore case study</span>
            </span>
          </button>
          <div className="component-panel">
            <div className="code-tab">
              <Icon name="code" size={15} />
              <span>ProjectCard.tsx</span>
              <span className="file-type">TSX</span>
            </div>
            <pre aria-label="React component excerpt from this portfolio">
              <code>
                <span className="code-line">
                  <span className="line-number">01</span>
                  <span className="syntax-key">&lt;ProjectCard</span>
                </span>
                <span className="code-line">
                  <span className="line-number">02</span> project={"{"}project
                  {"}"}
                </span>
                <span className="code-line">
                  <span className="line-number">03</span> index={"{"}index{"}"}
                </span>
                <span className="code-line">
                  <span className="line-number">04</span> onOpen={"{"}
                  setSelected{"}"}
                </span>
                <span className="code-line">
                  <span className="line-number">05</span>
                  <span className="syntax-key">/&gt;</span>
                </span>
              </code>
            </pre>
            <div className="code-caption">
              <Icon name="branch" size={13} />
              Reusable components. Real projects.
            </div>
          </div>
          <a href="#skills" className="scene-stack">
            <Icon name="layers" size={21} />
            <span>
              <b>Built with intention</b>
              <span>React · TypeScript · Vite</span>
            </span>
          </a>
        </div>
      </div>
      <div className="container hero-foot">
        <span>
          Developer opportunities <span aria-hidden="true">/</span>{" "}
          Small-business websites
        </span>
        <a href="#work">
          Explore selected work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}



